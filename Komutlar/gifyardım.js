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

    .setColor("RANDOM")
    .setTitle("**  » UwUmaru  **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JyMsba3du5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-normal](https://discord.gg/JyMsba3du5) → normal gifler.
> [-NSFW](https://discord.gg/JyMsba3du5) → NSFW gifler.
> [-hayvan](https://discord.gg/JyMsba3du5) → Hayvan gifleri.
> [-kemalsunal](https://discord.gg/JyMsba3du5) → **Kemal Sunal** gifleri.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Whyperius 🎄*#9246**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
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
  name: "gifyardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
