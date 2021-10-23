

module.exports = {
  name: "fishington",
  category: "games",

  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
});

  }
}