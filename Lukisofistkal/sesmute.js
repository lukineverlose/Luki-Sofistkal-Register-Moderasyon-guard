const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Luki", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")

if (!ayarlar.sesMuteYetkisi.some(qwe => message.member.roles.cache.has(qwe)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Yeterli yetkilere sahip değilsin!`))

let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let süre = args[1];
let sebep = args.splice(2).join(" ") || "Sebep Belirtilmedi!"
if (!üye) return message.channel.send(embed.setDescription("Geçerli bir kullanıcı belirtmelisin! [`!vmute @Luki 5m Düzeni Bozma`]"));
if (üye.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription("Kendinden üst/eşit yetkide birisine ceza uygulayamazsın!"))
if (!süre || !ms(süre)) return message.channel.send(embed.setDescription("Geçerli bir süre belirtmelisin! [`!vmute @Luki 5m Düzeni Bozma`]"));

if (!üye.voice) return message.channel.send(embed.setDescription("Üye herhangi bir ses kanalına bağlı olmadığı için işleme devam edilemedi."))

if(üye.voice) üye.voice.setMute(true);
message.channel.send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından "${süre}" süresince seste mutelendi! [\`${sebep}\`]`));
message.guild.channels.cache.get(ayarlar.muteLog).send(embed.setDescription(`${üye} isimli kullanıcı ${message.author} tarafından "${süre}" süresince seste mutelendi! [\`${sebep}\`]`));

db.set(`sesmuteli.${üye.id}`, true);
db.push(`sicil.${üye.id}`, {Yetkili: message.author.id, Sebep: sebep, Ceza: "voice mute"});

setTimeout(async function() {
üye.voice.setMute(false);
db.delete(`sesmuteli.${üye.id}`);
message.channel.send(embed.setDescription(`${üye} kullanıcısının cezası süresi bittiği için kaldırıldı [\`${sebep}\`]`));
message.guild.channels.cache.get(ayarlar.muteLog).send(embed.setDescription(`${üye} kullanıcısının cezası süresi bittiği için kaldırıldı [\`${sebep}\`]`));
}, ms(süre));
};

exports.config = {
  name: "vmute",
  guildOnly: true,
  aliases: ["sesmute", "voice-mute"],
};