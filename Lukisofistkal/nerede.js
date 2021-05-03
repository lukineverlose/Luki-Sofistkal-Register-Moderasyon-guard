const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`Geçerli bir üye belirtmelisiniz.`)).then(qwe => qwe.delete({ timeout: 5000 }));

message.channel.send(embed.setDescription(`
${client.nike} ${member} kullanıcısı ${member.voice ? `**${member.voice.channel.name}** isimli kanalda. Mikrofonu ${member.voice.selfMute ? "kapalı." : "açık."} | Kulaklığı ${member.voice.selfDeaf ? "kapalı." : "açık."} | Kamerası: ${member.voice.selfVideo ? "açık." : "kapalı."}` : "herhangi bir sesli kanalda değil."}
`))
    }
  ;
  exports.config = {
    name: "nerede",
    guildOnly: true,
    aliases: ["nerede"],
  };