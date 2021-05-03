const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');


exports.run = async(client, message, args) => {

let cbooster = message.guild.roles.cache.get("BOOSTER ROL İD")
if(!cbooster) return message.channel.send("Böyle bir rol bulamadım, idyi doğru gir")
let tag = 'İSİM DEĞİŞİNCE BAŞA KONULACAK TAG'

if(!message.member.roles.cache.has(cbooster.id)) return message.react("RED EMOJİ İD Sİ")

let cisim = args.slice(0).join(' ')
if(!cisim || cisim.length < 0) return message.channel.send("yeni adını belirt kanki.")
if(cisim.length > 32) return message.channel.send("üzgünüm 32 harften fazla girdin.")

message.guild.members.cache.get(message.author.id).setNickname(`${tag} ${cisim}`)
message.react ("ONAY EMOJİ İD Sİ")
}
exports.config = {
    name: "zengin",
    guildOnly: true,
    aliases: ["zengin"],
  };
  