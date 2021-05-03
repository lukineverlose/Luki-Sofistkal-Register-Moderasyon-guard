const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Luki", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")

if (!ayarlar.banYetkilisi.some(qwe => message.member.roles.cache.has(qwe)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Yeterli yetkilere sahip değilsin!`))

let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let sebep = args.splice(1).join(" ") || "Sebep Belirtilmedi!"
if (!üye) return message.channel.send(embed.setDescription("Geçerli bir kullanıcı belirtmelisin! [`!ban @ReawenID 5m Düzeni Bozma`]"));
if (üye.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription("Kendinden üst/eşit yetkide birisine ceza uygulayamazsın!"))

message.channel.send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından yasaklandı! [\`${sebep}\`]`));
message.guild.channels.cache.get(ayarlar.banLog).send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından yasaklandı! [\`${sebep}\`]`));

db.push(`sicil.${üye.id}`, {Yetkili: message.author.id, Sebep: sebep, Ceza: "ban"});
üye.ban({reason: sebep});
};

exports.ayarlar = {
  name: "ban",
  guildOnly: true,
  aliases: ["yasakla", "sg", "yargı"],
};
