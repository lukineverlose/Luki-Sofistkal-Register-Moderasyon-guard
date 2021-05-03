const db = require("quick.db");

module.exports = {
    conf: {
      aliases: ["katılım", "join"],
      name: "katılımsırası",
    },
  
    run: async function (client, message, args, embed, prefix) {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`Geçerli bir üye belirtmelisiniz.`)).then(qwe => qwe.delete({ timeout: 5000 }));


message.channel.send(embed.setDescription(`
${member} kullanıcısı **${(message.guild.members.cache.filter(a => a.joinedTimestamp <= member.joinedTimestamp).size).toLocaleString()}.** üyemiz. :tada:
  `))
    }
  };
  