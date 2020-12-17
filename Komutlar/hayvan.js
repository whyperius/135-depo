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
    .setTitle("**  » UwUmaru **")
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ewqeq)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=788808558224474153&scope=bot&permissions=8)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-kedi](https://discord.gg/ewqeq) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-köpek](https://discord.gg/ewqeq) → Sosyal medyalarım. 
> [-tavşan](https://discord.gg/ewqeq) → Botta ne kadar komut oldunu gösterir.
> [-inek](https://discord.gg/ewqeq) → Botun Pingine Bakarsın. 
> [-maymun](https://discord.gg/ewqeq) → Bot hakkında bilgi gösterir


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
  name: "hayvan",
  description: "hayvan gif Listesini Gösterir!",
  usage: "+hayvan"
};
