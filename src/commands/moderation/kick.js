module.exports = {
    name: 'kick' ,
    commands: ['kick'] ,
    description: "Kicks the first mentioned user from the server" ,
    callback: (clent , message , args) => {
        const { member , mentions } = message;
        const tag = `<@${member.id}>`;

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
        ){
            const target = mentions.users.first();

            if(target){
                const targetMember = member.guild.members.cache.get(target.id);
                targetMember.kick()
                messasge.channel.send(`${tag} has been kicked`);
            } else {
                message.reply(`You need to mention a user to kick.`);
            }
        } else {
            message.reply(`You don't have the permissions to use this command.`);
        }
    }
}