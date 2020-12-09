import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    summary = 'List all commands.';
    precondition: Permission = '';
    module = 'General';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '`.pl help` -> show this\n' +
            '`.pl bump` -> bump a server\n' +
            '`.pl invite` -> update server invite');
    }
}
