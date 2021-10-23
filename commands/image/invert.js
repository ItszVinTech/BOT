const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "invert",
   category: "image",
  
  description: "Invert Colors Of An User??",
run: async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let inverted = await canvacord.Canvas.invert(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(inverted, "inverted.png");
    return message.channel.send({files:[attachment]});
 }
}