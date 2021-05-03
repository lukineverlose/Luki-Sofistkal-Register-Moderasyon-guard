  
const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async function (client, message, args, settings, embed) { //async function yaptık 19. satır hata vermesin diye

let cezalırol = "";
let booster = "";
let yetkili = ["rol 1", "rol 2"]; //arraya aldık 1den fazla rol girilebilsin diye
let log = "";

if (!message.member.hasPermission(8) && !yetkili.some(qwe => message.member.roles.cache.has(qwe))) return message.channel.send("Hata: yetkin yok eug eug @luki adlı yetkiliden iste eug eug eug").then(acarSil => acarSil.delete({timeout: 5000}));

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!member) {
let susturuster = await client.users.fetch(args[0]); //sunucuda olmayana ceza atcaz
if (susturuster) {
db.set(`acarMute.${susturuster.id}`, true).catch();
message.channel.send(`${susturuster.tag} (${susturuster.id}) kullanıcısı yarrağı boğazladı! (**mute**)`)
}
} else {
if (susturuster) return;
return message.channel.send(`Hata: bir üye bleirtmedin qwewq (luki götten)`).then(acar => acar.delete({timeout: 5000}))
}

member.roles.add(cezalırol).then(qwe => message.channel.send(`${member} kullanıcısının ağzına verdik`));


};

exports.ayarlar = {
  name: "mute",
  guildOnly: true,
  aliases: "sustur",
};