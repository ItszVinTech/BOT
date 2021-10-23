const api = require('blueapi.js');
const discord = require('discord.js');
module.exports = {
  name: "petpet",
   category: "image",
  
  description: "PetPet some one LOL",
run: async (client, message, args) => {
  
        let image = await api.image.petpet(message.author.displayAvatarURL({ dynamic: false, format: 'png' }), { frames: 60} );

        let file = new discord.MessageAttachment(image, "petpet%1,hand=100px=AVATAR.gif");

        message.channel.send({files:[file]});
}
}
