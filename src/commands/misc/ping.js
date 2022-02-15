module.exports = {
     aliases: ['p'] ,
     description: 'Ping the bot' ,
     minArgs: 0 ,
     maxArgs: 0 ,
     callback: (message) => {
         message.reply('Pong!');
     }
}