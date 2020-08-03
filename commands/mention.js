const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"))
let pipi = JSON.parse(fs.readFileSync("./crea.json", "utf8"))
const moment = require('moment');
const fetch = require('node-fetch');
client.commands = new Discord.Collection(); 
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"]
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"]
client.login(token);


    client.on("message", message => {
        if (message.content.startsWith("<@733971257619513385>")) {   
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
            message.reply("→ Mon prefix : `"+pref+" `, ma commande d'aide : `tu!help`")
        }

        if (message.content.startsWith("<@!733971257619513385>")) {
            message.reply("→ Mon prefix : `"+pref+" `, ma commande d'aide : `tu!help`")
    
    
        }
    });


    client.on("ready", () => {
        console.log("mention.js a démarré")
    });
    