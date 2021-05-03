const { MessageEmbed } = require('discord.js');
const moment = require("moment");
const permler = {
    "ADMINISTRATOR": "Yönetici",
    "CREATE_INSTANT_INVITE": "Davet Oluştur",
    "KICK_MEMBERS": "Üyeleri At",
    "BAN_MEMBERS": "Üyeleri Yasakla",
    "MANAGE_CHANNELS": "Kanalları Yönet",
    "MANAGE_GUILD": "Sunucuyu Yönet",
    "ADD_REACTIONS": "Tepki Ekle",
    "VIEW_AUDIT_LOG": "Denetim Kaydını Görüntüle",
    "PRIORITY_SPEAKER": "Öncelikli Konuşmacı",
    "STREAM": "Yayın Aç",
    "VIEW_CHANNEL": "Kanalları Gör",
    "SEND_MESSAGES": "Mesaj Gönder",
    "SEND_TTS_MESSAGES": "Metin Okuma Mesajı Gönder",
    "MANAGE_MESSAGES": "Mesajları Yönet",
    "EMBED_LINKS": "Bağlantı Yerleştir",
    "ATTACH_FILES": "Dosya Ekle",
    "READ_MESSAGE_HISTORY": "Mesaj Geçmişini Oku",
    "MENTION_EVERYONE": "@everyone, @here ve Tüm Rollerden Bahset",
    "USE_EXTERNAL_EMOJIS": "Harici Emojiler Kullan",
    "VIEW_GUILD_INSIGHTS": "Sunucu Bilgilerini Görüntüle",
    "CONNECT": "Bağlan",
    "SPEAK": "Konuş",
    "MUTE_MEMBERS": "Üyeleri Sustur",
    "DEAFEN_MEMBERS": "Üyeleri Sağırlaştır",
    "MOVE_MEMBERS": "Üyeleri Taşı",
    "USE_VAD": "Ses Eylemini Kullan",
    "CHANGE_NICKNAME": "Kullanıcı Adı Değiştir",
    "MANAGE_NICKNAMES": "Kullanıcı Adlarını Yönet",
    "MANAGE_ROLES": "Rolleri Yönet",
    "MANAGE_WEBHOOKS": "Webhook'ları Yönet",
    "MANAGE_EMOJIS": "Emojileri Yönet"
  };
exports.run = async (bot, message, args) => {
    let role = message.mentions.roles.first() || args[0];
    if (!role) return message.channel.send('Rol girmelisin agam!')
    try {
    let asıl = message.guild.roles.cache.get(role.id || role);
    let hex = asıl.hexColor.toString().slice(1)
    let izinler = asıl.permissions.toArray().slice(0, 8).map((r, index) => `\`${index + 1}.\` ${permler[r]}`).join('\n')
    let izinler2 = asıl.permissions.toArray().map((r, index) => `\`${index + 1}.\` ${permler[r]}`).join('\n')
    let izin = asıl.permissions.toArray().includes('ADMINISTRATOR') ? `:tada: Yönetici :tada:\n╰> yönetici yetkisi oldugu için ${asıl.permissions.toArray().length - 1} yetki sıralanamadıı.` : asıl.permissions.toArray().length > 9 ? izinler + `\n╰> ${asıl.permissions.toArray().length - 8} adet fazladan yetki gözükmekte.` : izinler2
    let rolüyeler = asıl.members.size < 9 ? asıl.members.array().map((r, index) => `\`${index + 1}.\` ${r}`).join('\n') : asıl.members.array().slice(0, 8).map((r, index) => `\`${index + 1}.\` ${r}`).join('\n') + `\n╰> ${asıl.members.size - 8} agada daha bulunmaktadır.`
    let embed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/832573453612613672/832993200029302845/hikobuwun.png`)
    .setColor(asıl.hexColor)
    .setFooter(`rolun oluştugu zaman/tarih: ${moment(role.createdAt).format("DD/MM/YYYY")}`)
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .addField(`rolun genel bilgileri şöyledir `,`**rol id si:** ${asıl.id}\n**adı:** ${asıl.name}\n**rolumuzun renk kodu:** ${asıl.hexColor.toUpperCase()}\n**rolumuzun sıralaması:** ${asıl.rawPosition ? asıl.rawPosition : '1'}/${message.guild ? message.guild.roles.cache.size : '1'}\n**etiket atılabilir mi :** ${asıl.mentionable ? 'eved' : 'hayiw'}`)
    .addField(`rolumuze sahip agalar (${asıl.members.size})`, `${!rolüyeler ? 'bu role sahip bi aga bulamadım.' : rolüyeler}`)
    .addField(`roldeki yetkiler/izinler (${asıl.permissions.toArray().length})`, `${!izin ? 'bulunamadı la.' : izin}`)
    message.channel.send(embed)
    } catch(e) {
        message.channel.send('agam Rol bulunamadı lütfen girdiğiniz bilgilerin doğru olduğundan emin olunuz.')
    }
};
exports.config = {
  name: "lukirol",
  guildOnly: true,
  aliases: ["roli"],
};