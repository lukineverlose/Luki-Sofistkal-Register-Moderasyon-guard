const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Luki", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")
let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!üye) return message.channel.send(embed.setDescription("Geçerli bir kullanıcı belirtmelisin! [`!unceza @Luki`]"));

let muteli = await db.fetch(`muteli.${üye.id}`);
let jailli = await db.fetch(`jailli.${üye.id}`);
let sesmuteli = await db.fetch(`sesmuteli.${üye.id}`);

if (muteli && üye.roles.cache.has(ayarlar.muteRol)) muteli = "Şu anda muteli!";
if (!muteli && !üye.roles.cache.has(ayarlar.muteRol)) muteli = "Şu anda muteli değil!";

if (jailli && üye.roles.cache.has(ayarlar.JailRol)) jailli = "Şu anda cezalıda!";
if (!jailli && !üye.roles.cache.has(ayarlar.JailRol)) jailli = "Şu anda cezalıda değil!";

if (sesmuteli && üye.voice.setMute(true)) sesmuteli = "Şu anda ses kanallarında muteli!";
if (!sesmuteli && üye.voice.setMute(false)) sesmuteli = "Şu anda ses kanallarında muteli!"

message.channel.send(embed.setDescription(`
${üye} isimli kullanıcının hangi cezasını kaldırılacağını seçmelisiniz!
**Cezalar:**
Mute: ${muteli}
Jail: ${jailli}
Ses Mute: ${sesmuteli}
Kullanıcının chatteki mutesini kaldırmak için **mute**, cezalıdan kurtarmak için **jail**, sesteki mutesini kaldırmak için ise **sesmute** yazmalısınız!
`))

if (muteli) {
message.channel.awaitMessages(response => response.content === 'mute', {
max: 1,
time: 10000,
errors: ['time'],
})
.then((collected) => {
message.channel.send(embed.setDescription(`${üye} kullanıcısının chatteki mutesi kaldırıldı!`))
db.delete(`muteli.${üye.id}`);
üye.roles.remove(ayarlar.muteRol);
})
}

if (jailli) {
message.channel.awaitMessages(response => response.content === 'jail', {
max: 1,
time: 10000,
errors: ['time'],
})
.then((collected) => {
message.channel.send(embed.setDescription(`${üye} kullanıcısının jail cezası kaldırıldı!`))
db.delete(`jailli.${üye.id}`);
üye.roles.set(db.get(`eskiRoller.${üye.id}`));
})
}

if (sesmuteli) {
message.channel.awaitMessages(response => response.content === 'jail', {
max: 1,
time: 10000,
errors: ['time'],
})
.then((collected) => {
message.channel.send(embed.setDescription(`${üye} kullanıcısının sesteki mutesi kaldırıldı!!`))
db.delete(`sesmuteli.${üye.id}`);
üye.voice.setMute(false);
})
}
};

exports.ayarlar = {
  name: "unceza",
  guildOnly: true,
  aliases: ["cezaac", "af", "unmute", "unjail", "cezaaç"],
};