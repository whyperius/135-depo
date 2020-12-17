const Discord = require("discord.js");
const client = new Discord.Client();
//CrewCode
exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  message.channel.send("Bi dk..").then(message => {
    var espriler = [
      "https://media.discordapp.net/attachments/648221632560889856/789113437514235924/a3fe54fcd1bee0a1810d2d05c5d97b2d37c8dfe4.png?width=407&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/789023747927048202/19d99cb.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/789023267478175744/f76f4f2.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/788544398043906058/Konachan.com_-_277679_anus_ass_bed_blue_eyes_blush_breasts_brown_hair_cum_fingering_headphones_long_.jpg?width=892&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787768565943107584/46c3e09.png?width=859&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371483978268692/1606078333836.jpg?width=865&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371483583217664/1606078336943.jpg?width=443&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371483151466526/1606590332967.jpg?width=441&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371092548648990/c80fc7a.jpg?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371092029341766/51c541c.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787371091738755072/18d3603.jpg?width=455&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787370002462277652/6be9652.jpg?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787370001438998548/c067217.jpg?width=525&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787369434926153728/32e9081.jpg?width=449&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787369434607648788/7153d38.jpg?width=394&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787369299463503892/dddf9f0.jpg?width=445&height=629",
      "https://media.discordapp.net/attachments/648221632560889856/787369298485182515/f8b40ff.jpg?width=372&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787369297776476200/3e4a567.jpg?width=995&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787368813683015680/ab0a96e.jpg?width=424&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787368813229899846/ac59b13.jpg?width=453&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787368812793430076/4e4c4e4.jpg?width=630&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787368397809123379/8852a4d.jpg?width=414&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/787368397502677032/bd24baa.jpg?width=450&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/782603301338087434/HpTInFA56u8.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/782256624030973952/image0-147.jpg?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/782256621278986240/image0-212.jpg?width=789&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/782145128101707786/9b832f5.jpg?width=694&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781967880803057684/5df6334ed4bb9fb61a59efa71714c910.png?width=392&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781939849807527956/image0-60.png?width=625&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781936809345024020/mukai_takumi_idolmaster_and_1_more_drawn_by_eenui334__2da7412c22f51372aad98f966d12b331.jpg?width=840&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781561603371040778/54bc08b1576a0441ff8d05882dc3e538.jpeg?width=408&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781561086272339968/Ark.jpg?width=527&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781551191472865290/31_5ho6l2zo9t.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/780162361897517077/780162582727491624/iris_en_en_no_shouboutai_drawn_by_trg_sain__sample-309b67e212b91f952ed148f685990d13.png",
      "https://media.discordapp.net/attachments/780162361897517077/780163015299432538/tamaki_kotatsu_en_en_no_shouboutai_drawn_by_arciealbano__sample-bce99c6398baad0e626ca2f73f322d9c.png?width=434&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/781053114832125982/dade4c2.jpg?width=527&height=629",
      "https://media.discordapp.net/attachments/648221632560889856/781053017817743390/f3b7a2d.jpg?width=490&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780811074446426122/jeanne_d_arc_and_jeanne_d_arc_fate_and_1_more_drawn_by_misako12003__7ed81dbdcbecbe46cb74e3b649cd1b54.png?width=528&height=629",
      "https://media.discordapp.net/attachments/648221632560889856/780808421242175498/c077fa0.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780757116931014696/7e4e924.png?width=891&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780756993778516018/6db1e32ea96c12bbc1fc8fabb99a77c6.jpg?width=444&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780756989516709898/6cc7b37.png?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780756848008888330/4df89b1d96671fd853c4ed2d791f4803.jpg?width=779&height=630",
      "https://media.discordapp.net/attachments/716414935122444309/782604715216863232/9c7bddc6e7528a01da604b4e69113caf289eb3ff.png?width=819&height=630",
      "https://media.discordapp.net/attachments/716414935122444309/780714618522828800/Capture_2020-11-23-08-50-25.png",
      "https://media.discordapp.net/attachments/716414935122444309/780116812452200488/EncGjw-XMAAGEp_.png?width=634&height=630",
      "https://media.discordapp.net/attachments/716414935122444309/777860384911523880/IMG_20201116_155210.jpg?width=478&height=630",
      "https://media.discordapp.net/attachments/670304651631001611/778754924515033108/image2-3-1.jpg?width=892&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780756726957080596/0fcfa136986a6e8d93926b672c5e7cbe.jpg?width=458&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780339582188650536/tumblr_ouv74tSxV11tfu9emo1_1280.png.jpg?width=463&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780116997970591744/328493c.jpg?width=456&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/780116929129873448/a7eba00.jpg?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779683159272980510/6714e8e5a075917fc33d32f3b4fb97807dc3a2fa.jpg?width=443&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779677949464674335/3393093e8cb7c61e787059492bdbca65.png?width=899&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779677921505574942/image0-28-1.jpg?width=446&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779394070261792768/7e76522bdb41a6bfa78a49da28460285-sample.jpg?width=445&height=629",
      "https://media.discordapp.net/attachments/648221632560889856/779046107769602068/EnIJBUtW8AAhy9G.png?width=445&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779046112232734730/EnIJBUqXIAMhaeH.png?width=892&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779046097900797963/EnIL4YfXcAYPt-6.png?width=433&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779005652483833926/8548491e62fe0c660113ef5f37473749.png?width=753&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/779001990910574642/8073b6f.jpg?width=436&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/778766354144297030/85446681_.png?width=420&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/778755034921828352/hamakaze_kantai_collection_drawn_by_viwop__sample-0c337dab44798d6005cada94d8fce784.jpg?width=421&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/778711137214398495/i_love_hentie_2.0_20200711_2.png?width=504&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/778711113477914634/IMG_20201118_173139.jpg?width=632&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/778298545061101628/4662782a9bc0e6941cdd1321eee9c3b3.jpg?width=636&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/777826877657317376/image0-178.jpg?width=425&height=630",
      "https://media.discordapp.net/attachments/648221632560889856/777788674767192064/EmyGYwgVEAIFk1v.jpg?width=418&height=630",
      "https://media.tenor.co/videos/841c5dca289fc8d3e8bce0d323bc9646/mp4"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
  });
};
//CrewCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "hentai",
  description: "Balık Tutarsın.",
  usage: "hentai"
};
