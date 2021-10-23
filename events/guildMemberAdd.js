/**
 * Required Stuff
 */

const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const Discord = require("discord.js")


/**
 * @param {Object} [client]
 * @param {Object} [member]
 */

module.exports.run = async (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;

  let myArray = [
    'https://media.discordapp.net/attachments/900054258345447474/900057317175853076/R.png?width=1618&height=910',
    'https://media.discordapp.net/attachments/900054258345447474/900057246795440148/R.png?width=1456&height=910',
    'https://images-ext-1.discordapp.net/external/zLuSPAqOhOIDrXxquiutC5zcXXlJ0i-uZp9ASCywobk/https/i.pinimg.com/originals/6c/60/71/6c607176487958f2f13475a84e9995a5.jpg',
    'https://images-ext-2.discordapp.net/external/wUhdVKoSkQva_zBjbinVe3MxaYLjWLBgyNuAghB73c0/%3Frik%3D2iukXQqxHWijdg%26riu%3Dhttp%253a%252f%252fwww.wallpaperbetter.com%252fwallpaper%252f156%252f434%252f483%252fcherry-blossom-flowers-painting-pink-1080P-wallpaper-middle-size.jpg%26ehk%3DF%252f5JZw%252bkbBDI9Zwo5gg8r70bpOKPtPQzsdfCiAIgDfs%253d%26risl%3D%26pid%3DImgRaw%26r%3D0/https/th.bing.com/th/id/R.c8e53b21cfb9438215580dd9e92a576a'
  ]
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  let data = await canva.welcome(member, { link: randomItem })

  const attachment = new Discord.MessageAttachment(
    data,
    "welcome-image.png"
  );

  channel.send(
    {
      files: [attachment]
    }
  );
}

