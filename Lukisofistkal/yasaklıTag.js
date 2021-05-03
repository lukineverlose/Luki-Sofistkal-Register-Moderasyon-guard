const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Luki", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Yeterli yetkilere sahip değilsin!`))
//!conf.jailSorumlusu.some(qwe => message.member.roles.cache.has(qwe));
let tag = args.splice(0).join(" ");
let array = await db.get(`yasakliTag`);
let index = array.find(qwe => qwe == tag);
if (!tag) return message.channel.send(embed.setDescription(`Geçerli bir tag(sembol) belirtmelisin!`));

if (index) array.splice(array.indexOf(tag), 1);
else array.push(tag);
db.set("yasakliTag", array);
message.channel.send(embed.setDescription(`Yasaklı tagların arasına \`${tag}\` tagı eklendi! Kullanıcı adında \`${tag}\` olan \`${message.guild.members.cache.filter(qwe => qwe.user.username.includes(tag)).size}\` adet kişiye <@&${conf.jailRolu}> rolü dağıtılıyor! ( **Yasaklı Taglar:** ${array.join(", ")} )`))

message.guild.members.cache.forEach(member => {
if (array.some(tag => member.user.username.includes(tag))) {
member.roles.set([ayarlar.JailRol]);
}
})
};

exports.config = {
  name: "yasaklıtag",
  guildOnly: true,
  aliases: ["yasaklı"],
};