const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setFooter("Reawen ❤️ Luki", message.guild.iconURL({dynamic: true})).setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("010000")

if (!ayarlar.banYetkilisi.some(qwe => message.member.roles.cache.has(qwe)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription(`Yeterli yetkilere sahip değilsin!`))

let üye = client.users.fetch(args[0]);
if (!üye) {
message.channel.send(embed.setDescription(`Geçerli bir yasaklamanın ID numarasını girmelisin!`));
} else {
message.guild.members.unban(üye.id).catch(qwe => message.channel.send(embed.setDescription(`[\`${üye}\`] ID numarasına sahip bir ban bulunamadı!`)))
message.channel.send(embed.setDescription(`[\`${üye}\`] isimli numaranın yasaklaması kaldırıldı!`))
}
};

exports.ayarlar = {
  name: "ban",
  guildOnly: true,
  aliases: ["yasakla", "sg", "yargı"],
};