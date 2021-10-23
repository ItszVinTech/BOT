module.exports = {
  name: "rules",
  category: "info",
  description: "Shows The Rules Of The Server",
  usage: "ping",
  run: (client, message) => {
    // at the top of your file
    const { MessageEmbed } = require('discord.js');

    // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Rules')
      .setURL('https://discordapp.com/guidelines')
      .setAuthor('WkeyW', 'https://images-ext-1.discordapp.net/external/Z5CJj29MHKjv_2KqNEBGC5lOsJdcvn4QTC41s8Y5hoo/https/cdn.discordapp.com/avatars/899719296735936562/bbe17374df349e5e6754c84ee53d1938.webp', 'https://discord.js.org')
      .setThumbnail('https://images-ext-1.discordapp.net/external/Z5CJj29MHKjv_2KqNEBGC5lOsJdcvn4QTC41s8Y5hoo/https/cdn.discordapp.com/avatars/899719296735936562/bbe17374df349e5e6754c84ee53d1938.webp')
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: '**Username**', value: ' **📇 Your username should not contain any special characters, up to 4 emojis allowed in your nickname, must follow QWERTY and can not be violating Discord ToS.**', inline: false },
        { name: '**What To Post**', value: '**🙅🏽‍♂️You must abide by all Discord ToS, and no harmful/malicious content is tolerated in the server.**', inline: false },
        { name: '**Self-Promoting**', value: '**🪧 You can not promote your server or social media in this server, this does include advertising in direct messages. The only exception is in advertisement channels.**', inline: false },
        { name: '**Spam**', value: '**  🗣️ Do not spam in channels, this includes spam pinging and word walling (sending one or more messages spanning over multiple lines). Do not mention VIPs, Content Creators or Staff.**', inline: false },
        { name: '**Voice Channels**', value: '**🔊 In voice channels, you must not earrape or play loud audio, and all music must be SFW and shorter than 10 minutes. Voice channel rules are in the respective channels.**', inline: false },
        { name: '**Spoilers**', value: '**📺 Do not spoiler bait, this includes appearing to break a rule with spoilers, or hiding NSFW or malicious content in spoilers.**', inline: false },
        { name: '**Impersonation**', value: '** 👮‍♀️ Do not impersonate members. This includes copying their profile picture, and/or nickname. Moderators have say on this per case.**', inline: false },
        { name: '**Information**', value: '** 🧾 Never share private information with anyone, asking a user for private information or sending malicious links (i.e. IP grabbers) will be moderated.**', inline: false },
        { name: 'Topics', value: '**📣 No talking about political, or controversial topics in the server. This includes posting photos related to these topics.**', inline: false },
        { name: 'Messaging', value: '**Please speak in English in voice channels and chats, this is to ensure everyone understands each other. Also swearing is not allowed as this is a family friendly server.   🙅‍♂️**', inline: false },
        { name: 'Moderators', value: '**The @moderators will Mute/Kick/Ban per discretion.  If you feel mistreated dm an @head mod or admin and we will resolve the issue.**', inline: false },
        { name: 'Discord TOS', value: 'https://discordapp.com/guidelines', inline: false },
      )
      .setImage('https://media1.tenor.com/images/1f72b04f5121bfc9991be5831f263c31/tenor.gif?itemid=18331160')
      .setTimestamp()
      .setFooter('Key Utilities🏗️', 'https://images-ext-1.discordapp.net/external/Z5CJj29MHKjv_2KqNEBGC5lOsJdcvn4QTC41s8Y5hoo/https/cdn.discordapp.com/avatars/899719296735936562/bbe17374df349e5e6754c84ee53d1938.webp');

    message.channel.send({ embeds: [exampleEmbed] });
  }

}