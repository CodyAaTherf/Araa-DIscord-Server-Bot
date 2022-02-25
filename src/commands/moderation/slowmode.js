const Discord = require('discord.js')

module.exports = {
    name: 'slowmode' ,
    commands: ['slowmode' , 'slow'] ,
    description: 'Sets the slowmode of the channel' ,
    callback: (message , arguments , text) => {
        run = (message , args) => {
            const { channel } = message;

            if(arguments.length < 1){
                message.reply('Please specify a time in seconds.');
                return;
            }

            let duration = args.shift().toLowerCase();
            if(Duration === 'off'){
                duration = 0;
            }

            if(isNaN(duration)){
                message.reply('Please specify a time in seconds.');
            }
            return;
        }

        channel.setRateLimitPerUser(duration , args.join(' '));
        message.reply(`Set slowmode to ${duration} seconds.`);
    }
}