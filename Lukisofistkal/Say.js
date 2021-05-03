const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.some(r => ["","","","",""].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
    message.react(no);
    message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin canım agam.`))
    return;    
    };
    

  

    let no = ""; 
    let yes = "";
    let n = no;
    let y = yes;

let lukisayılar = {
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
};

let embed = new Discord.MessageEmbed().setFooter("Luki 💛 Reawen").setColor("RANDOM").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();
let tagli = message.guild.roles.cache.get("830803537658249216").members.size
let boost = message.guild.premiumSubscriptionCount
    let boostlevel = message.guild.premiumTier


message.channel.send(embed.setDescription(`
\`>\` \ <:luki:832699820362956810> ailemizde toplam  **${message.guild.memberCount}** adet üye bulunmaktadır.
\`>\` \ <:luki:832699820362956810> ailemizin sesli odalarında **${message.guild.members.cache.filter(s => s.voice.channel).size}** adet üye bulunmaktadır.
\`>\` \ <:luki:832699820362956810> ailemizin tagında **${tagli}** adet üye bulunmaktadır.
\`>\` \ <:luki:832699820362956810> ailemize toplam **${boost}** takviye yapılmış, **${boostlevel}** seviye.
`))
};

exports.config = {
  name: "say",
  guildOnly: true,
  aliases: ["count", "say"],
};