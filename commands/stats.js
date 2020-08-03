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
    if (message.content.startsWith(pref + "stats")) {

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

      const usersNumber = client.users.cache.size;
      const guildsNumber = client.guilds.cache.size; 

          let lol = JSON.parse(fs.readFileSync("./crea.json", "utf8")); 
          if (message.author.id in lol) return message.channel.send(`**TutoBot** stats: \n- **${guildsNumber}** servers. \n- **${usersNumber}** users.`)
        .catch(error => console.log());
    }
    });


    client.on("ready", () => {
        console.log("stats.js a démarré")
    });
    
    