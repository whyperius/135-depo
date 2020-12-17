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
      "https://media.discordapp.net/attachments/233561991153844224/788211537206050826/image0.gif",
      "https://cdn.discordapp.com/attachments/674371563729977414/785641022314119239/SlimyGenuineDrever-mobile.mp4",
      "https://cdn.discordapp.com/attachments/233561991153844224/787771980911869982/1607813914690.webm",
      "https://cdn.discordapp.com/attachments/457067788553551883/787123542349185054/video0.mov",
      "https://images-ext-1.discordapp.net/external/d0c22z47ie_ll4-dcWFSCzHm2_MQ1tobCkJG8Ypw0o4/https/images-ext-2.discordapp.net/external/_uNNHELVM1EWPjRCzX1oosd40a2CuYr5zakm3YGT9kA/https/cdn.zerotwo.dev/FUCK/003c45a2-ffac-49fc-867c-d7350023399e.gif",
      "https://images-ext-1.discordapp.net/external/0siYnVQ9-CtdqRzlVWLzZBmwtmt0NCzUFwBDX2v1GlQ/https/images-ext-1.discordapp.net/external/fcSz9PPhc4LWOxjiM15agkmeyDuqnXWj5BdQb5baABA/https/cdn.zerotwo.dev/FUCK/58cb6fe2-c707-48f2-bb61-b9174c2b0c96.gif",
      "https://images-ext-1.discordapp.net/external/GyH-IN81ewsMyZ0gXWbotJeLExN8G_rCuPkjxASBQQ8/https/images-ext-1.discordapp.net/external/vr-GqI4uZo8_wKiXlfA96PyrijmLV3QFHKXxlUKk2mE/https/cdn.zerotwo.dev/FUCK/8c836138-c776-4470-9bdf-530e10cefdc2.gif",
      "https://images-ext-2.discordapp.net/external/Zrx8bDgpYWZLxM4m-nPmEtXdVjTSorzyFvCfG6DPxCo/https/images-ext-2.discordapp.net/external/ij5eviIwb9jbYPWm5uSQV0e8w4oC4Fh7Yi5kyPiRKCs/https/cdn.zerotwo.dev/FUCK/d8e2ed63-0117-443d-a4cb-270de3700f01.gif",
      "https://cdn.discordapp.com/attachments/233561991153844224/783978692418207745/video0.mov",
      "https://media.discordapp.net/attachments/712319314015027262/781938875199258624/all_tags_1313.gif",
      "https://media.discordapp.net/attachments/712319314015027262/781938849290911756/all_tags_705.gif",
      "https://media.discordapp.net/attachments/712319314015027262/781542257295753286/15fd0f6-1.gif",
      "https://images-ext-2.discordapp.net/external/kHBIMoC7fw491o8_Rp-Ur8wOJNSipRs46JNSPqk7b7M/https/media.discordapp.net/attachments/780162361897517077/780163939861921802/tamaki_kotatsu_en_en_no_shouboutai_drawn_by_creeeen_jjang__9c3696633bbf7fcde36842d9a13afe89.gif?width=665&height=630",
      "https://media.discordapp.net/attachments/712319314015027262/779983931465269278/rikka_takarada.gif",
      "https://media.discordapp.net/attachments/712319314015027262/779688832622788617/4fefb7310f11cc7be1040c12c2351bfe.gif?width=472&height=630",
      "https://media.discordapp.net/attachments/712319314015027262/779004243687636993/58026b8f83d6a30213e9f6a4c71f1b8c.gif?width=1120&height=630",
      "https://media.discordapp.net/attachments/712319314015027262/778882868575338546/tits_355.gif",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "https://media.discordapp.net/attachments/712319314015027262/781554823114784788/image0-7.gif",
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
