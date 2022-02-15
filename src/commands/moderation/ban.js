module.exports = {
    name: 'ban' ,
    commands: ['ban' , 'banish'] ,
    description: "Bans the first mentioned user from the server" ,
    callback: (clent , message , args) => {
        const { member , mentions } = message;
        const tag = `<@${member.id}>`;

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        ){
            const target = mentions.users.first();

            if(target){
                const targetMember = member.guild.members.cache.get(target.id);
                targetMember.ban()
                messasge.channel.send(`${tag} has been banned`);
            } else {
                message.reply(`You need to mention a user to ban.`);
            }
        } else {
            message.reply(`You don't have the permissions to use this command.`);
        }
    }
}