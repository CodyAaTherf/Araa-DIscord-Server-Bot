module.exports = {
     aliases: ['p'] ,
     description: 'Ping the bot' ,
     callback: (message) => {
         message.reply('Pong!');
     }
}