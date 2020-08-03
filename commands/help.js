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
    if (message.content.startsWith(pref + "help")) {

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        const content = JSON.parse(fs.readFileSync("./aide.json", "utf8"));
        const exampleEmbed = new Discord.MessageEmbed()
        .setAuthor("Commande d'aide de TutoBot pour "+message.author.username, message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(`→ Prefix: \``+ pref +` \`\n\n` + (content["help"]))
        .setThumbnail(client.user.avatarURL())
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp();
        message.channel.send(exampleEmbed)
        .catch(error => console.log());
    }
    });
    


    
client.on("ready", () => {
    console.log("help.js a démarré")
});

