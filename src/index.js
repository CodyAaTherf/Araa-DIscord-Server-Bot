const { token } = require('./config.json');

const Discord = require('discord.js');
const ReliableCmds = require('reliablecmds');
const client = new Discord.Client({
    intents: [
        'GUILDS' ,
        'GUILD_MESSAGES' ,
        'GUILD_MESSAGE_REACTIONS' ,
        'GUILD_BANS' ,
        'DIRECT_MESSAGES' ,
    ]
});

client.once('ready' , () => {
    console.log('Ready!');

    new ReliableCmds(client , 'commands')
})

client.login(token);