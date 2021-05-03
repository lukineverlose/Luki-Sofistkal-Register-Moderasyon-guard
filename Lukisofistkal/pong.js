const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {
message.channel.send('Pong!')
};

exports.config = {
  name: "pong",
  guildOnly: true,
  aliases: ["ping"],
};