const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {
message.channel.send('Pong!')
};

exports.ayarlar = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};