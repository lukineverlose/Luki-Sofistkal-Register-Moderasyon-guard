const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Ravenn", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")

if (!ayarlar.jailSorumlusu.some(qwe => message.member.roles.cache.has(qwe)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Yeterli yetkilere sahip değilsin!`))

let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let süre = args[1];
let sebep = args.splice(2).join(" ") || "Sebep Belirtilmedi!"
if (!üye) return message.channel.send(embed.setDescription("Geçerli bir kullanıcı belirtmelisin! [`!jail @ReawenID 5m Düzeni Bozma`]"));
if (üye.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription("Kendinden üst/eşit yetkide birisine ceza uygulayamazsın!"))
if (!süre || !ms(süre)) return message.channel.send(embed.setDescription("Geçerli bir süre belirtmelisin! [`!jail @ReawenID 5m Düzeni Bozma`]"));


if(üye) üye.roles.set([ayarlar.jailRolu]);
message.channel.send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından "${süre}" süresince cezalıya atıldı! [\`${sebep}\`]`));
message.guild.channels.cache.get(ayarlar.jailLog).send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından "${süre}" süresince cezalıya atıldı! [\`${sebep}\`]`));

db.set(`eskiRoller.${üye.id}`, üye.roles.cache.map(qwe => qwe.id));
db.set(`cezali.${üye.id}`, true);
db.push(`sicil.${üye.id}`, {Yetkili: message.author.id, Sebep: sebep, Ceza: "jail"});

setTimeout(async function() {
if (db.get(`eskiRoller.${üye.id}`)) üye.roles.set(db.get(`eskiRoller.${üye.id}`));
db.delete(`eskiRoller.${üye.id}`);
db.delete(`cezali.${üye.id}`);
message.channel.send(embed.setDescription(`${üye} kullanıcısının cezası süresi bittiği için kaldırıldı [\`${sebep}\`]`));
message.guild.channels.cache.get(ayarlar.jailLog).send(embed.setDescription(`${üye} kullanıcısının cezası süresi bittiği için kaldırıldı [\`${sebep}\`]`));
}, ms(süre));
};

exports.config = {
  name: "jail",
  guildOnly: true,
  aliases: ["jail"],
};