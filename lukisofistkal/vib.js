  
const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args, settings, embed) => {

if (!message.member.roles.cache.has(settings.köleyetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription("Yeterli yetkilere sahip değilsiniz.")).then(qwe => qwe.delete({timeout: 3 * 1000}));

let qwe = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!qwe) return message.channel.send(embed.setDescription(`:no_entry_sign: Geçerli bir üye belirtmelisiniz.`)).then(qwe => qwe.delete({timeout: 3 * 1000}));

qwe.roles.cache.has(ayarlar.vib) ? qwe.roles.remove(ayarlar.vib) : qwe.roles.add(settings.vib)
return message.channel.send(embed.setDescription(`${qwe} kullanıcısı başarıyla **VIP** üye yapıldı!`))

};

exports.ayarlar = {
  name: "vip",
  guildOnly: true,
  aliases: ["fcm", "firstclassmember", "special"],
};