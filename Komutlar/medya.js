const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const davet = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Sosyal medyalar")
    .setDescription(
      "**Takip et =**[Meirifuno](https://www.instagram.com/meirifuno/)"
    )
    .addField("``Code by Whyperius 🎄*#9246``");
  message.channel.send(davet);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "medya",
  description: "",
  usage: ""
};
