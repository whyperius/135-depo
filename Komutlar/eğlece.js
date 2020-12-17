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
> [-zarat](https://discord.gg/JyMsba3du5) →  Zar atarsınız
> [-kasaaç](https://discord.gg/JyMsba3du5) → CsGo kasası açmaya ne dersin?.
> [-emojiyazı](https://discord.gg/JyMsba3du5) → Emojili yazı yazmaya ne dersin?.
> [-espiri](https://discord.gg/JyMsba3du5) → Bot espiri yapar.
> [-sor](https://discord.gg/JyMsba3du5) → Bot sorduğunuz soruya cevap verir.
> [-vine](https://discord.gg/JyMsba3du5) → Bot size komik paylaşımlar gösterir.
> [-adamasmaca](https://discord.gg/JyMsba3du5) → Adam asmaca oyunu.
> [-balıktut](https://discord.gg/JyMsba3du5) → Dereden balık tutarsınız.
> [-tersyazı](https://discord.gg/JyMsba3du5) →  Yazdığınız yazıyı bot tersten yazar
> [-mcskin](https://discord.gg/JyMsba3du5) →Yazdığınız ismin minecraft görünüşünü atar.
> [-token](https://discord.gg/JyMsba3du5) →  Botun tokenini gösterir.
> [-düello](https://discord.gg/JyMsba3du5) →  Arkadaşlarınızla düello yaparsınız.
> [-wasted](https://discord.gg/JyMsba3du5) → Polis tarafından yakalanırsnız
> [-yumruk-at](https://discord.gg/JyMsba3du5) → Etiketlediğin kişiye bot yumruk atar.
> [-yazan-kazanır](https://discord.gg/JyMsba3du5) → Yazan kazanır oyunu.
> [-kapaklaf](https://discord.gg/JyMsba3du5) → Etiketlediğin kişiye bot kapaklaf söyler.
> [-şanslısayım](https://discord.gg/JyMsba3du5) → Şanslı sayını bulmaya calışır.
> [-kaçcm](https://discord.gg/JyMsba3du5) → Malafatını ölçer.

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
  name: "eğlence",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-eğlence"
};
