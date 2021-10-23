require("./html.js")
const { token } = require("./config.json");
const { Intents, Client, Collection } = require("discord.js"); 
const client = new Client({
  disableEveryone: true ,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]
});
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.commands = new Collection();
client.aliases = new Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);