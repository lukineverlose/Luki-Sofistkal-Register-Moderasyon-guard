const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json") 

module.exports.run = async (client, message, args) => {
    
 
    if (!args[0]) return;
    let code = args.join(" ");

    try {
      var result = clean(await eval(code));
      if (result.includes(settings.token))
        return message.channel.send("neyi alıyon knk qweqw:flag_tr:");
      message.channel.send(result, {
        code: "js",
        split: true,
      });
    } catch (err) {
      message.channel.send(err, { code: "js", split: true });
    }
  }
;

function clean(text) {
  if (typeof text !== "string")
    text = require("util").inspect(text, { depth: 0 });
  text = text
    .replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203));
  return text;
}
exports.config = {
  name: "eval",
  guildOnly: true,
  aliases: ["eval"],
};