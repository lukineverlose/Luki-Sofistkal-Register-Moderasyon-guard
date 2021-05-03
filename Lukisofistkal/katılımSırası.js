const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed()
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`Geçerli bir üye belirtmelisiniz.`)).then(qwe => qwe.delete({ timeout: 5000 }));


message.channel.send(embed.setDescription(`
${member} kullanıcısı **${(message.guild.members.cache.filter(a => a.joinedTimestamp <= member.joinedTimestamp).size).toLocaleString()}.** üyemiz. :tada:
  `))
    }
  ;
  
  exports.config = {
    name: "katılım",
    guildOnly: true,
    aliases: ["katılım"],
  };