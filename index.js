const Discord = require("discord.js");
const interactions = require("discord-slash-commands-client");

const client = new Discord.Client({ intents: new Discord.Intents(32767)});
const token = "token lol";

client.interactions = new interactions.Client(token, "1045120992055406612");


client.on("ready", () => {
  console.log("Client is ready!");

  client.interactions
    .createCommand({
      name: "ping",
      description: "ping pong",
    })
    .then(console.log)
    .catch(console.error);
});

client.on('interactionCreate', async interaction => {
  if (interaction.commandName == 'ping') {
    interaction.reply("pong");
  }
});

client.on("message", msg => {
    if (msg.content == 'ping') {
        msg.reply('pong');
    }
});

// login
client.login(token);