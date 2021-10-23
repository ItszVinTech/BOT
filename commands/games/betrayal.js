

module.exports = {
  name: "betrayal",
  category: "games",

  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
    
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});


  }
}
