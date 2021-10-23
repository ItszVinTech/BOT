const fetch = require("node-fetch").default;
const discord = require('discord.js');
module.exports = {
  name: "djs",
  category: "info",

  description: "PetPet some one LOL",
  run: async (client, message, args) => {

    let [query, branch] = args;

    if (!query) return message.reply("Please include a search query!");
    if (!branch) branch = "master";

    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(json => {
        if (!json) return message.reply("DJS Documemtation Not Found!");

        message.reply({ embed: json });
      })
      .catch(() => {
        message.reply("Couldn't fetch DJS-FETCH-API");
      })
  }

}