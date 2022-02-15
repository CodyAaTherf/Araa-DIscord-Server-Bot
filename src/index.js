const { token } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        'GUILDS' ,
    ]
});

client.once('ready' , () => {
    console.log('Ready!');
})

client.login(token);