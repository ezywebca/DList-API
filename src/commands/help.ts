import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    summary = 'List all commands.';
    precondition: Permission = '';
    module = 'General';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '`b/ help` -> show this\n' +
            '`b/ bump` -> bump a server\n' +
            '`b/ invite` -> update server invite');
    }
}
