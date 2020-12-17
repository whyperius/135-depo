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
    .setTitle("**  » UwUmaru")
    .setThumbnail(
      "https://images-ext-2.discordapp.net/external/wXCVAr6uALbeY4jZd2oBnVo56z_AmpqUdhY03QNpPIc/https/images-ext-1.discordapp.net/external/smksuDy3lUxMcknddxNvFLulF3WKwJwkf6meIknrQ5I/https/images-ext-2.discordapp.net/external/abDAI9KUWAjGr_11MFvhdpNfn-8d_z-O7tWJsE3BlRQ/https/images-ext-1.discordapp.net/external/Z0PXBLUyDTjSCHGhA5O4J5JFXFykJjYiYvPuR0YPwpc/%2525253Fv%2525253D1/https/cdn.discordapp.com/emojis/776447012672897025.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JyMsba3du5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** **[Web-Site]( )**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-ilet](https://discord.gg/JyMsba3du5) → Yapımcıma yazdığınız yazıyı iletir!.**Boş yere kullanmayın!!!**
> [-aşk-ölç](https://discord.gg/JyMsba3du5) → Etiketlediğin kişinin aşkını ölcer <3 .
> [-kullanıcı-bilgi](https://discord.gg/JyMsba3du5) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-medya](https://discord.gg/JyMsba3du5) → Sosyal medyalarım. 
> [-toplamkomut](https://discord.gg/JyMsba3du5) → Botta ne kadar komut oldunu gösterir.
> [-aile](https://discord.gg/JyMsba3du5) → Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?
> [-say](https://discord.gg/JyMsba3du5) → Sunucu hakkında detaylı bilgi verir.
> [-avatar](https://discord.gg/JyMsba3du5) → Etiketlediğin birisinin avatarını gösterir.
> [-yetkilerim](https://discord.gg/JyMsba3du5) → Hangi yetkilere sahip olduğunuzu gösterir.
> [-profil](https://discord.gg/JyMsba3du5) → Etiketlediğin kişini profilini görürsünüz.
> [-sunucuresmi](https://discord.gg/JyMsba3du5) → Sunucu resmini gösterir.
> [-ping](https://discord.gg/JyMsba3du5) → Botun Pingine Bakarsın. 
> [-kurallar](https://discord.gg/JyMsba3du5) → Genel kuralları gösterir.
> [-davet](https://discord.gg/JyMsba3du5) → beni sunucuna ekle.
> [-botbilgi](https://discord.gg/JyMsba3du5) → Bot hakkında bilgi gösterir
> [-bug-bildir](https://discord.gg/JyMsba3du5) → Yazdığınız bug'u yapımcılarıma bildirir.
> [-istek-kod](https://discord.gg/JyMsba3du5) → Yazdığınız istek kodu yapımcılarıma bildirir.
> [-instagram](https://discord.gg/JyMsba3du5) → Yazdığınız intagram kullanıcsı hakkında bilgi verir.

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
  name: "kullanıcı",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-kullanıcı"
};
