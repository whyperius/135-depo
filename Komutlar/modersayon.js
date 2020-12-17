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
      "https://images-ext-2.discordapp.net/external/wXCVAr6uALbeY4jZd2oBnVo56z_AmpqUdhY03QNpPIc/https/images-ext-1.discordapp.net/external/smksuDy3lUxMcknddxNvFLulF3WKwJwkf6meIknrQ5I/https/images-ext-2.discordapp.net/external/abDAI9KUWAjGr_11MFvhdpNfn-8d_z-O7tWJsE3BlRQ/https/images-ext-1.discordapp.net/external/Z0PXBLUyDTjSCHGhA5O4J5JFXFykJjYiYvPuR0YPwpc/%2525253Fv%2525253D1/https/cdn.discordapp.com/emojis/776447012672897025.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JyMsba3du5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-mute](https://discord.gg/JyMsba3du5) →  Etiketlediğin kişiye mute atar!
> [-unmute](https://discord.gg/JyMsba3du5) →  Etiketlediğin kişinin mutesini açar!
> [-kayıt-bilgi](https://discord.gg/JyMsba3du5) →  Kayıt için bilgi.
> [-taç](https://discord.gg/JyMsba3du5) → Sunucunun sahibini gösterir.
> [-sil](https://discord.gg/JyMsba3du5) → Yazdığınız miktarda mesajı siler.
> [-ban](https://discord.gg/JyMsba3du5) → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [-kick](https://discord.gg/JyMsba3du5) → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [-duyuru](https://discord.gg/JyMsba3du5) → Bot yazdıgının mesajı duyuru yapar.
> [-küfür](https://discord.gg/JyMsba3du5) → Küfür engel sistemini açarsınız.
> [-reklam](https://discord.gg/JyMsba3du5) → Reklam engel sistemi açarsınız.
> [-slowmode](https://discord.gg/JyMsba3du5) → Yavaş modu ayarlarsınız. 
> [-forceban](https://discord.gg/JyMsba3du5) →  ID ile ban atar!
> [-unban](https://discord.gg/JyMsba3du5) → Birisinin banını açarsınız.
> [-sa-as](https://discord.gg/JyMsba3du5) →  Sa-As sistemini aktif eder.
> [-sunucubilgi](https://discord.gg/JyMsba3du5) →  Sunucu hakkında bilgi verir
> [-üyedurum](https://discord.gg/JyMsba3du5) →  Sunucu üyeleri hakkında bilgi verir
> [-çekiliş](https://discord.gg/JyMsba3du5) → Çekiliş yaparsınız.


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
  name: "moderasyon",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-moderasyon"
};
