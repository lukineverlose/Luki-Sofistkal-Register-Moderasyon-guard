const { MessageEmbed, } = require("discord.js");

exports.run = async(client, message, args) => {
        let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
        if (!rol) return;

        let rolrenk = `${rol.hexColor}`
        let rolID = `${rol.id}`
        let roluyesayi = `${message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).size}`
        let rolkisiler = `${message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).map(x => `${x} - (\`${x.id}\`)`).join("\n")}`

message.channel.send(`
- ${rol} rol bilgileri;
- agam rol rengi : ${rolrenk}
- agam rol id si: \`${rolID}\`
- agam roldeki toplam agalar: \`${roluyesayi}\`

- rolumdeki agalar;
${rolkisiler}
`, {split: true})
};
exports.config = {
    name: "embedrol",
    guildOnly: true,
    aliases: ["rolb2","lukinoembed", "embedsizrol"],
  };