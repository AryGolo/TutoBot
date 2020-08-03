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



    client.on("message", async message => {
        const prefix = pref + "ping";
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
      
        let début = Date.now();
      
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        if (cmd === "") {
            if (message.author.id != "413423609122390016") return message.channel.send("**Seuls les créateurs du bots peuvent exercer cette commande.**");
            const msg = await message.channel.send(`
            PingGing...`);
            msg.edit(`Pong 🏓 J'ai une latence de ${Date.now() - début} ms`);
        }   
      });
      



      client.on("ready", () => {
        console.log("ping.js a démarré")
    });
    