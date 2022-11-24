const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]})

client.on("message", msg => {
    if (msg.content == 'ping') {
        msg.reply('pong');
    }
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTA0NTEyMDk5MjA1NTQwNjYxMg.GIUZVq.A4y2p7PDrMszSf7c-T_aiTEmmIV2dn8Az60LsM');