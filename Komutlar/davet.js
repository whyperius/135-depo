const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const EmbedCrewCode = new Discord.MessageEmbed()

    .setColor("PİNK")
    .setTitle("**•Davet**")
    .setThumbnail("").setDescription(`
• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız [-bug-bildir](https://discord.gg/qzHTkhjQgT) ile bize iletebilirsiniz.

• Sunucuma nasıl eklerim?
Sunucuna eklemek istiyorsan [buraya tıklayarak](https://discord.com/oauth2/authorize?client_id=788808558224474153&permissions=2146958847&scope=bot) ekleyebilirsin.

• Destek Sunucumuz
[Destek Sunucusuna](https://discord.gg/JyMsba3du5) katılarak sizde güzel sohbetlere katılabilirsiniz!

© 2020 UwUmaru | Tüm hakları saklıdır.
`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet!",
  usage: "-davet"
};
