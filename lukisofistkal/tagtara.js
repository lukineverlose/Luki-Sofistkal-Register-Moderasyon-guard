const { MessageEmbed } = require('discord.js');
const ayar = require('../ayarlar.json');


module.exports.run = async(client, message, args) => {
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    let tag = ""
    let etiket = ""
    let rol = ""
    let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(rol))
    let etiketliler = message.guild.members.cache.filter(s => s.user.discriminator.includes(etiket) && !s.roles.cache.has(rol))
    

    taglilar.array().forEach(async(member, index) => {
        setTimeout(async() => {
            await member.roles.add(rol)
        }, index * 1000)
    })
    etiketliler.array().forEach(async(member, index) => {
        setTimeout(async() => {
            await member.roles.add(rol)
        }, index * 1000)
    })
    
    embed.setDescription(`
**${taglilar.size + etiketliler.size}** adet agama rol verilecek
**}** Adet agamdan rol aldım. saka lasaka gül diye
`)
    message.channel.send(embed)
}
exports.config = {
    name: "lukitag?",
    guildOnly: true,
    aliases: [],
    cooldown: 0
};
