
module.exports = {
  name: "poker",
  category: "games",

  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
      return message.channel.send(`${invite.code}`);
    });
  }
}