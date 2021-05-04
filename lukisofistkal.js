const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
const client = new discord.Client();          
require('./util/eventLoader.js')(client);     


//READY.JS

const Discord = require('discord.js');
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`LUKİ <3 SOFİSTİKAL`, { type:'WATCHING' })
  client.login(ayarlar.meme)
  console.log("bot aktif diledigin gibi kullanabilirsin bebeğim")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

//ridiy cıson son kısmı

//komut algılama kısmı şeysi
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./Lukisofistkal/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./Lukisofistkal/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})
//KOMUT ALGILAYICI SON

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.göt) permlvl = 4;
    return permlvl;
};

//-----------//
//-----------------------KOMUTLAR-----------------------\\

//-----------------------Sa-As-----------------------\\

client.on('message', async (msg, member, guild) => {
  let lukisa = await  db.fetch(`saas_${msg.guild.id}`)
      if(lukisa === 'açık') {
        if (msg.content.toLowerCase() === 'sa'){
          
        msg.reply('**Aleyküm Selam Hoşgeldin aşkımmmm ;)** ');    
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let kafir = await  db.fetch(`saas_${msg.guild.id}`)
      if(kafir === 'açık') {
        if (msg.content.toLowerCase() === 'hi'){
          
        msg.reply('**Hi beybi send nudes ?**');    
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let sea = await  db.fetch(`saas_${msg.guild.id}`)
      if(sea === 'açık') {
        if (msg.content.toLowerCase() === 'sea'){
          
        msg.reply('**Aleyküm Selam Hoşgeldin bebeğim ;) :wink:** ');    
      }
      }
    });

//-----------------------selam faslı son kısmı-----------------------\\


//--------------------çette atılan mesajlara emoji tepki koyma şeysi---------//


    //-------------------hoşgeldin mesajı kısmı zubab -----------///
    client.on("guildMemberAdd", member => {  
        const welkam = member.guild.channels.cache.find(r => r.id === "welkamçetİDsi"); //welkam çet id si
          
          let user = client.users.cache.get(member.id);
          require("moment-duration-format");
            const kurulus = new Date().getTime() - user.createdAt.getTime();  
        const gecen = moment.duration(kurulus).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
         
          var kontrol;
        if (kurulus < 1296000000) kontrol = '\<a:emoji_227:819991185807769600>'
        if (kurulus > 1296000000) kontrol = '\<a:OnaylamakGif:805289459758268446>'
        moment.locale("tr");
        welkam.send("🎉 Sunucumuza Hoş Geldin ! <@" + member + "> \n\n Hesabın "+ gecen +" Önce Oluşturulmuş "+kontrol+" \n\n Sunucu kurallarımız <#832506441046163466> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\n Seninle beraber **" + member.guild.memberCount + "** kişi olduk , Tagımızı alarak bizlere destek olabilirsin , Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor <@&832506368509870091> seninle ilgilenecektir  İyi eğlenceler !")
        });
      
        client.on("guildMemberAdd", async member => {
            let kişi= client.users.cache.get(member.id);
            const tarih = new Date().getTime() - kişi.createdAt.getTime();   
      
          if (tarih < 2592000001) {
          member.roles.add("id")//Şüpheli Hesap
          
          }else{
          
          member.roles.add("id")//Güvenilir Hesap//yani unregister rol id si
          
            }
      });
      const db = require('quick.db');
      client.on("ready", async () => {
          let botVoiceChannel = client.channels.cache.get("botun baglanacagı kanal id si");
          if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
        });
        //--------------------------------tag alana oto rol falan----------------//
        //-hem etiket hemde tag da oto rol-----//
        client.on("userUpdate", async function(oldUser, newUser) { // Luki Shina!
            const kölesunucu = "id"//sunucu id si
            const kölerol = "id"//taglırolü family of marino gibi
            const köletag = "id"//tag crew tag family tag
            const kölechat = 'id'// chat yani general chat
            const kölelog = 'id' // log kanalı yani tag log
          
            const guild = client.guilds.cache.get(kölesunucu)
            const role = guild.roles.cache.find(roleInfo => roleInfo.id === kölerol)
            const member = guild.members.cache.get(newUser.id)
            const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('RANDOM').setTimestamp().setFooter('Łuki ❤ sofistkal');
            if (newUser.username !== oldUser.username) {
                if (oldUser.username.includes(köletag) && !newUser.username.includes(köletag)) {
                    member.roles.remove(kölerol)
                    client.channels.cache.get(kölelog).send(embed.setDescription(` ${newUser} isminden \`ETİKETİNİ YAZ\` çıakrtarak ailemizden ayrıldı!`))
                } else if (!oldUser.username.includes(köletag) && newUser.username.includes(köletag)) {
                    member.roles.add(kölerol)
                    client.channels.cache.get(kölechat).send(`\<a:lukidans:832743533101580338> ${newUser} adlı agam tag alarak ailemize katıldı Tagımız : (${köletag})`)
                    client.channels.cache.get(kölelog).send(embed.setDescription(`  ${newUser} ismine \`ETİKETİNİ YAZ\` alarak ailemize katıldı`))
                }
            }
           if (newUser.discriminator !== oldUser.discriminator) {
                if (oldUser.discriminator == "ETİKETİNİ YAZ" && newUser.discriminator !== "ETİKETİNİ YAZ") { // MESELA 0049 GİBİ ETİKETİ YAZIN Kİ OTO ROL ATSIN
                    member.roles.remove(kölerol)
                    client.channels.cache.get(kölelog).send(embed.setDescription(`  <@!' + newUser + '> etiketinden \`ETİKETİNİ YAZ\` çıakrtarak ailemizden ayrıldı!`))
                } else if (oldUser.discriminator !== "ETİKETİNİ YAZ" && newUser.discriminator == "ETİKETİNİ YAZ") { // MESELA 0049 GİBİ ETİKETİ YAZIN Kİ OTO ROL ATSIN
                    member.roles.add(kölerol)
                    client.channels.cache.get(kölelog).send(embed.setDescription(`  <@!' + newUser + '> etiketine \`ETİKETİNİ YAZ\` alarak ailemize katıldı`))
                    client.channels.cache.get(kölechat).send(`\<a:lukidans:832743533101580338>    ${newUser} tag alarak ailemize katıldı  Łuki ❤ sofistkal`)
                }
            }
          
          })
          //------------------tag-reply--------//
          client.on("message", async msg => {
            if (msg.content.toLowerCase() === 'tag') {
              return msg.channel.send('TAGINIZ');
            }
          });
          client.on("message", async msg => {
            if (msg.content.toLowerCase() === 'tag') {
              return msg.channel.send('TAG ETİKETİNİZ');
            }
          });

          
          client.on("message", async message => {
          if (!message.author.bot && message.channel.id === ayarlar.generalChat) {
         
let qwe = 0;

let yavsamaSozleri = [
  "Yaşanılacak en güzel mevsim sensin.",
  "Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.",
  "Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.",
  "Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.",
  "Denize kıyısı olan şehrin huzuru birikmiş yüzüne.",
  "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
  "Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.",
  "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
  "Bir gamzen var sanki cennette bir çukur.",
  "Gecemi aydınlatan yıldızımsın.",
  "Ponçik burnundan ısırırım seni",
  "Bu dünyanın 8. harikası olma ihtimalin?",
  "fıstık naber?",
  "Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?",
  "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
  "Müsaitsen aklım bu gece sende kalacak.",
  "Gemim olsa ne yazar liman sen olmadıktan sonra...",
  "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
  "Sabahları görmek istediğim ilk şey sensin.",
  "Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.",
  "Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
  "Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.",
  "Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.",
  "Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.",
  "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
  "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
  "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
  "Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...",
  "Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
  "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...",
  "Domates biber patlıcan, bu gece sana saplıcam...",
  "Bu ego nereden geliyor. Kuyudan mı çıkarıyorsun?",
  "çok tatlısın :blush:"
];

qwe++;

if (qwe >= 90) {
qwe = 0;
message.reply(yavsamaSozleri.random())
}
}

client.on("guildMemberAdd", async qwe => {
  let yasakliTag = await db.get(`yasakliTag`) || [];
  let logKanalID = ayarlar.tagLog;
  let yasakliTagRolID = ayarlar.JailRol;
  
  if (yasakliTag.some(asd => qwe.user.username.includes(asd))) {
  qwe.roles.set([yasakliTagRolID]).catch(asd => console.log(asd));
  client.channels.cache.get(logKanalID).send(`<@!${qwe.id}> ( \`${qwe.tag}\` ) kullanıcısının kullanıcı adında **yasaklı bir tag** tespit edildiği için jaile atıldı!`);
  }
  })
  
  client.on("userUpdate", async (lukisofisteski, lukisofistyeni) => {
  let yasakliTag = await db.get(`yasakliTag`)
  let logKanalID = ayarlar.tagLog
  let yasakliTagRolID = ayarlar.yasakliTagRolID;
  let kayitsizRolID = ayarlar.kayıtsızmal;
  
  if (lukisofisteski.username !== lukisofistyeni.username) {
  if (yasakliTag.some(asd => lukisofistyeni.username.includes(asd))) {
    lukisofistyeni.roles.set([yasakliTagRolID]).catch(qwe => console.log(qwe));
  client.channels.cache.get(logKanalID).send(`<@!${lukisofistyeni.id}> isimli kullanıcı yasaklı taglardan birini kullanıcı adına eklediği için jaile atıldı!`)
  lukisofistyeni.send(`Yasaklı taglardan birine sahip olduğun için jaile atıldın. Çıkardıktan sonra tekrar sunucumuzda sohbete devam edebileceksin!\n\n\`>\` Sevgiler, **${lukisofistyeni.guild.name}** Yönetim Ekibi\n\nYasaklı Taglar: ${yasakliTag.map(qwe => ` \`${qwe}\` `).join(", ")}`)
  }
  } else if (!yasakliTag.some(asd => lukisofistyeni.username.includes(asd))) {
    lukisofistyeni.roles.set([kayitsizRolID]).catch(qwe => console.log(qwe));
  client.channels.cache.get(logKanalID).send(`<@!${lukisofistyeni.id}> isimli kullanıcı yasaklı tagı bıraktığı için kayıtsıza atıldı!`);
  lukisofistyeni.send(`Yasaklı tagımızı bıraktığın için jailden çıkarıldın. Yetkililer ile iletişime geçebilirsin dostum!\n\n\`>\` Sevgiler, **${lukisofistyeni.guild.name}** Yönetim Ekibi`)
  }
  })

  'use strict';


client.setMaxListeners(50);
const request = require("request");

  console.log('Hazır !');

const güvenlimownır = [ //güvenli id ler
  "",
  ""
];

const güvenlibod = [ //güvenli botlar
 "",
 ""
];

client.token = ayarlar.meme //token
client.log = ayarlar.ablog //log

const arr = [
  "ADMINISTRATOR",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "MANAGE_ROLES",
  "MANAGE_WEBHOOKS",
  "MANAGE_NICKNAMES"
];

client.on("guildUpdate", async (oldGuild, newGuild) => {
  newGuild.fetchAuditLogs().then(async (logs) => {
    if (logs.entries.first().action === `GUILD_UPDATE`) {
      var yapan = logs.entries.first().executor;
      let id = yapan.id;
      const uye = newGuild.members.cache.get(id);
      const kılent = newGuild.members.cache.get(client.user.id);
      if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
        if (!güvenlimownır.includes(id)) {
        request({
        method: "PATCH",
        url: `https://discord.com/api/guilds/${newGuild.id}/vanity-url`,
        headers: {
          Authorization: `Bot ${client.token}`
          },
          json: {
              code: `${oldGuild.vanityURLCode}`
            }
          });
        uye.ban({reason: "luki url guard Koruması"});
    let channel = client.channels.cache.get(client.log);
    if (channel) channel.send(`${uye} \`${uye.id}\` agam url çaldi banladım.`)
        newGuild.roles.cache.filter(r => { 
          return (
              arr.some(a => r.permissions.has(a)) && !güvenlibod.includes(r.id) && r.rawPosition < kılent.roles.highest.rawPosition
            );
          }).map(x => {
            console.log(x.name);
            x.edit({
              permissions: x.permissions.remove(arr)
            });
          });
        } else { };
      } else if (oldGuild.name !== newGuild.name) {
        if (!güvenlimownır.includes(id)) {
        newGuild.setName(oldGuild.name);
        uye.ban({reason: "luki  guards"});
        let channel = client.channels.cache.get(client.log);
        if (channel) channel.send(`${uye}  \`${uye.id}\` agam sunucu güncelledi banladım `)
        newGuild.roles.cache.filter(r => {
          return (
            arr.some(a => r.permissions.has(a)) && !botroles.includes(r.id) && r.rawPosition < kılent.roles.highest.rawPosition
          )
        }).map(x => {
          console.log(x.name);
          x.edit({
            permissions: x.permissions.remove(arr)
          });
        });
        } else { };
      } else { };
    } else { };
  });
});

process.on("uncaughtExpection", function (err) {
  if (err) console.log(err);
});







          })
          client.login(ayarlar.meme)
