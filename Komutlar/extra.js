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
> [-rol-ver](https://discord.gg/JyMsba3du5) → Etiketlediniz kullanıcıya rol verir.
> [-rol-al](https://discord.gg/JyMsba3du5) → Etiketlediğin kişden rol alır.
> [-anket](https://discord.gg/JyMsba3du5) → Anket yaparsınız.
> [-rololuştur](https://discord.gg/JyMsba3du5) → Rol oluşturur.
> [-id](https://discord.gg/JyMsba3du5) → İstediğin bi kişinin ID sini alır.
> [-kanal-id](https://discord.gg/JyMsba3du5) → Etiketlediğin kanalın ID sini atar.
> [-davet-oluştur](https://discord.gg/JyMsba3du5) → Etiketlediğin kanalın ID sini atar.
> [-oy-kick](https://discord.gg/JyMsba3du5) → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla](https://discord.gg/JyMsba3du5) → Matamatik işlemi yapar.
> [-davet-sıralaması](https://discord.gg/JyMsba3du5) → Sunucuda yapılan davetleri sıralar
> [-iltifat](https://discord.gg/JyMsba3du5) → Etiketlediğin kişiye bot iltifat eder.
> [-nick](https://discord.gg/JyMsba3du5) → Etiketlediğin kişinin ismini değiştirir.
> [-tekerleme](https://discord.gg/JyMsba3du5) → Tekerleme yazar.
> [-ilgincbilgi](https://discord.gg/JyMsba3du5) → İlginç bilgi yazar.
> [-desteaç](https://discord.gg/JyMsba3du5) → Zula deste açar.
> [-soygunyap](https://discord.gg/JyMsba3du5) → Vurgun yapmaya hazırmısın? :D

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Whyperius 🎄#9246**
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
  name: "extra",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-extra"
};
