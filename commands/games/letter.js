


module.exports = {
  name: "letter",
  category: "games",

  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
  }
}