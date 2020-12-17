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
    .setTitle("**  » UWUmaru  **")
    .setThumbnail(
      "https://images-ext-2.discordapp.net/external/wXCVAr6uALbeY4jZd2oBnVo56z_AmpqUdhY03QNpPIc/https/images-ext-1.discordapp.net/external/smksuDy3lUxMcknddxNvFLulF3WKwJwkf6meIknrQ5I/https/images-ext-2.discordapp.net/external/abDAI9KUWAjGr_11MFvhdpNfn-8d_z-O7tWJsE3BlRQ/https/images-ext-1.discordapp.net/external/Z0PXBLUyDTjSCHGhA5O4J5JFXFykJjYiYvPuR0YPwpc/%2525253Fv%2525253D1/https/cdn.discordapp.com/emojis/776447012672897025.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JyMsba3du5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-grafiti](https://discord.gg/JyMsba3du5) → grafiti logo oluşturur. 
> [-discord](https://discord.gg/JyMsba3du5) → discord logo oluşturur. 
> [-gold](https://discord.gg/JyMsba3du5) → gold logo oluşturur. 
> [-comic](https://discord.gg/JyMsba3du5) → comic logo oluşturur. 
> [-bubble](https://discord.gg/JyMsba3du5) → bubble logo oluşturur. 
> [-bubble2](https://discord.gg/JyMsba3du5) → bubble2 logo oluşturur. 
> [-dinamik](https://discord.gg/JyMsba3du5) → dinamik logo oluşturur. 
> [-altın](https://discord.gg/JyMsba3du5) → altın logo oluşturur. 
> [-banner](https://discord.gg/JyMsba3du5) → banner logo oluşturur. 
> [-basit](https://discord.gg/JyMsba3du5) → basit logo oluşturur. 
> [-elmas](https://discord.gg/JyMsba3du5) → elmas logo oluşturur. 
> [-neonmavi](https://discord.gg/JyMsba3du5) → neonmavi logo oluşturur. 
> [-kalın](https://discord.gg/JyMsba3du5) → kalın logo oluşturur. 
> [-anime](https://discord.gg/JyMsba3du5) → anime logo oluşturur. 
> [-habbo](https://discord.gg/JyMsba3du5) → habbo logo oluşturur. 
> [-arrow](https://discord.gg/JyMsba3du5) → arrow logo oluşturur. 
> [-green](https://discord.gg/JyMsba3du5) → green logo oluşturur. 
> [-alev](https://discord.gg/JyMsba3du5) → alev logo oluşturur. 
> [-red](https://discord.gg/JyMsba3du5) → red logo oluşturur. 
> [-kalp](https://discord.gg/JyMsba3du5) → kalp logo oluşturur. 

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
  name: "logo",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-logo"
};
