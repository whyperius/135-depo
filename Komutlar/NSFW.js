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
    .setTitle(
      "**  » UwUmaru | Nsfw Komutları Yenidir Eksikler İçin Kusura Bakmayın!!  **"
    )
    .setThumbnail(
      "https://images-ext-1.discordapp.net/external/smksuDy3lUxMcknddxNvFLulF3WKwJwkf6meIknrQ5I/https/images-ext-2.discordapp.net/external/abDAI9KUWAjGr_11MFvhdpNfn-8d_z-O7tWJsE3BlRQ/https/images-ext-1.discordapp.net/external/Z0PXBLUyDTjSCHGhA5O4J5JFXFykJjYiYvPuR0YPwpc/%25253Fv%25253D1/https/cdn.discordapp.com/emojis/776447012672897025.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JyMsba3du5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** Bir komut hakkında detaylı __yardım için__: **+yardım**

**• Komutlar**
> **[-hentai](https://discord.gg/JyMsba3du5) →Hentai atar.**
> **[-neko](https://discord.gg/JyMsba3du5) →Neko atar.**
> **[-ero](https://discord.gg/JyMsba3du5) →Erotik atar.**
> **[-gif](https://discord.gg/JyMsba3du5) →Hentai gifi atar.**

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
  aliases: ["nfsw", "nsfw", "NFSW"],
  permLevel: 0
};

exports.help = {
  name: "NSFW",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-NSFW"
};
