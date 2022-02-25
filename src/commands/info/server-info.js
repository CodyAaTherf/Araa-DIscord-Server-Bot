// const Discord = require('discord.js')

// module.exports = {
//     name: 'server-info' ,
//     commands: ['server-info' , 'serverinfo'] ,
//     description: 'Displays information about the server' ,
//     callback: (client , message , args) => {
//         const { guild , member } = message;
//         const { name , id , region , iconURL } = guild;
//         const { username , discriminator } = member.user;
//         const embed = new Discord.MessageEmbed()
//             .setTitle(name)
//             .setColor('#0099ff')
//             .setThumbnail(iconURL)
//             .addField('Owner' , `${username}#${discriminator}`)
//             .addField('ID' , id)
//             .addField('Region' , region)
//             .addField('Members' , guild.memberCount);

//         message.channel.send(embed);
//     }
// }