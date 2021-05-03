const Discord = require("discord.js"),
client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
    let tamamlandiemoji = '✔️';
    let embed1 = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`Luki ♥ sofistkal`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    let erkekembed = new Discord.MessageEmbed().setColor(0x56aaff).setFooter(`Luki ♥ sofistkal`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    let kadınembed = new Discord.MessageEmbed().setColor(0xff00ff).setFooter(`Luki ♥ sofistkal`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    if (!message.member.roles.cache.has(ayarlar.köleyetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1.setDescription(`agam bu komutu kullanman için <@&${ayarlar.kayıtYetkilisi}> rolunun sende olması lazım ama goremedim ???`)).then(x => x.delete({timeout: 10000}));
    let isim = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!isim) return message.channel.send(embed1.setDescription(`agamm ama muneccin degilim bir kullanıcı etiketler misin`)).then(m => m.delete({timeout: 7000}));
    let rol = message.mentions.roles.first()
    let member = message.guild.member(isim)
   
    let kayıts = await message.channel.send(embed1.setDescription(`**agam hayırlı olsun kayıt işlemi başladı**
    
    \<a:lukicik:837398322154831894> \kayıt edilen agam:\ ${isim}
    \<a:lukicik:837398322154831894> \kayıt yapan agam:\ ${message.author} 
    \<a:lukicik:837398322154831894> \agamın eski adı:\ **${isim.user.username}**
    
    
    agam emojiye basarak kayıt türlerini seçebilirsin :) 
    (♂️) erkek için  (♀️) kız için  (❌) buda iptal için çawpı`))
    
    kayıts.react("♂️").then(() => kayıts.react("♀️").then(() => kayıts.react("❌")));
    const filter = (reaction, isim) => {
      return (
        ["♂️", "♀️","❌"].includes(reaction.emoji.name) &&
        isim.id === message.author.id
      );
    };
    kayıts.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }).then((collected) => {
    const reaction = collected.first();
    if (reaction.emoji.name === "♂️") {
      kayıts.edit(embed1.setDescription(`${isim} isimli agam ${message.author} agam tarafından \`\` adıyla maileme <@&${ayarlar.herifrol}> olarak alındı`)).then(m => m.delete({timeout: 7000}))
      erkekKayıtGiris();
    } else if (reaction.emoji.name === "♀️") {
      kayıts.edit(embed1.setDescription(`${isim} isimli agam ${message.author} agam tarafından \`\` adıyla maileme <@&${ayarlar.gacırol}> olarak alındı`)).then(m => m.delete({timeout: 7000}))
      kızKayıtGiris();
    } else if (reaction.emoji.name === "❌") {
      kayıts.delete();
    } 
    })
    
    //ERKEK KAYIT İŞLEM
    const erkekKayıtGiris = async () => {
    isim.roles.add(ayarlar.erkekRol);
    isim.roles.remove(ayarlar.kayıtsızRol);
    client.channels.cache.get(ayarlar.kölelog).send(erkekembed.setDescription(`**Agam Erkek Olarak Kayıt Yapıldı Haberin Olsun**
    
    • \`kayıt edilen agam:\` ${isim}
    • \`kayıt eden yetkili agam:\` ${message.author} 
    • \`agamın eski ismi:\` **${isim.user.username}**
    • \`agamın yeni ismi: \` ****
    • \`agama verilen rol: \` **<@&${ayarlar.herifrol}>**
    • \`agamdan alınan rol: \` **<@&${ayarlar.kayıtsızmal}>**`))
    };
    
    //KIZ KAYIT İŞLEM
    const kızKayıtGiris = () => {    
    isim.roles.add(ayarlar.kızRol);
    isim.roles.remove(ayarlar.kayıtsızRol);
    client.channels.cache.get(ayarlar.kölelog).send(kadınembed.setDescription(`**Agam Kadın Olarak Kayıt Yapıldı Haberin Olsun**
    
    • \`kayıt edilen agam:\` ${isim}
    • \`kayıt eden yetkili agam:\` ${message.author} 
    • \`agamın eski ismi:\` **${isim.user.username}**
    • \`agamın yeni ismi:\` ****
    • \`agama verilen rol\` **<@&${ayarlar.gacırol}>**
    • \`agamdan alınan rol\` **<@&${ayarlar.kayıtsızmal}>**`))
    };
};

exports.ayarlar = {
  name: "Kayıt",
  guildOnly: true,
  aliases: ["kayıt","k","register"],
};