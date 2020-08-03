const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"))
let pipi = JSON.parse(fs.readFileSync("./crea.json", "utf8"))
const moment = require('moment');
const fetch = require('node-fetch');
const { createHash } = require("crypto");
const { error } = require("console");
client.commands = new Discord.Collection(); 
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"];
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"];
client.login(token);

client.on("message", message => {
    if(message.content === pref+"Vegas suiv") { 
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (!db[message.author.id]) db[message.author.id] = {
        xp: 1.1,
        level: 0
    };

    db[message.author.id].xp++;
    let userInfo = db[message.author.id];

    if(userInfo.xp > 1) {
        userInfo.level++;
        userInfo.xp = 1;
  
        message.reply("tu est passé au niveau suivant ! Fais "+pref+"`V"+userInfo.level+"`");
    }
   }
   
    if(message.content === pref+"V?") {
        let userInfo = db[message.author.id];
          /*.setTitle(`${message.author.username}`)
            .setColor(0x4286f4)
            .addField("Chapitre  📄", userInfo.level);*/

         let zizi = JSON.parse(fs.readFileSync("./database.json", "utf8"));
         if (message.author.id in zizi) return message.channel.send("Tu es au chapitre "+ userInfo.level);
    }

    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x);
    });

    if(message.content.startsWith(pref+"Vegas db")) {
        let lol = JSON.parse(fs.readFileSync("./crea.json", "utf8"));
        if (message.author.id in lol) return message.channel.send("Chargement de la db Vegas...");
    }

    if(message.content.startsWith(pref+"db crea")) {
        let lol = JSON.parse(fs.readFileSync("./crea.json", "utf8"));
        if (message.author.id in lol) return message.channel.send("Chargement de la db crea...");
    }

    if(message.content.startsWith("Chargement de la db Vegas...")) {
       if(message.author.id === "733971257619513385") {
           message.channel.send("```json\n"+fs.readFileSync("./database.json", "utf8")+"```");
       }
    }
 
    if(message.content.startsWith("Chargement de la db crea...")) {
        if(message.author.id === "733971257619513385")
            message.channel.send("```json\n"+fs.readFileSync("./crea.json", "utf8")+"```");
        }
    }

    if(message.content.startsWith("Chargement de la db")) {
        if(message.author.id === "733971257619513385")
            message.delete();
        }
    }


    if(message.content.startsWith(pref+"crea")) {
        const member = message.mentions.members.first();
   
        if (message.author.bot) return;
        if (message.author.id != "413423609122390016") return message.channel.send("**Seul Ary peut faire cette commande**");

        if (!member) {
            return console.log(); // wtf?
        }

  
        if (!pipi[member.id]) {
            pipi[member.id] = {};
            message.channel.send(`**${member}`+" est passé créa**")
        }

        fs.writeFile("./crea.json", JSON.stringify(pipi), (x) => {
            if (x) console.error(x);
        });
    }

    if(message.content === pref+"Vegas direct") {
        if (!db[message.author.id]) {
            db[message.author.id] = {
                xp: 1.1,
                level: 0
            };

            db[message.author.id].xp++;
            let userInfo = db[message.author.id];

            if(userInfo.xp > 1) {
                 userInfo.level++
                 userInfo.xp = 1

                 message.reply("Chargement du chapitre "+userInfo.level+"...")   
            }
        }
    }
 
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
    });

    const negro = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));

    if(message.content.includes("Chargement du chapitre 1.")) {

        if(message.author.id === "733971257619513385") {
            message.channel.send(negro["p1"]);
        }
    }

    if(message.author.id === "733971257619513385") {
        if(message.content.includes("Chargement du chapitre 2.")) {
            const v2 = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(negro["p2"])
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setThumbnail("https://media.discordapp.net/attachments/711657325869400116/736180709680611328/600px-Vegas_Pro_15.png")
                .setTimestamp();
            message.channel.send(v2);
    }

    if(message.content.includes("Chargement du chapitre 3.")) {
        if(message.author.id === "733971257619513385") {
            message.channel.send(negro["p3"]);
        }
    }

    if(message.content.includes("Chargement du chapitre 4.")) {
        if(message.author.id === "733971257619513385") {
            message.channel.send(negro["p4"]);
        }
    }

    if(message.content.includes("Chargement du chapitre 5.")) {
        if(message.author.id === "733971257619513385") {
            message.channel.send(negro["p5"]);
        }
    }
});


client.on("ready", => {
    console.log("Vegas.js a démarré [xp]");
});
