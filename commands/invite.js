const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"))
let pipi = JSON.parse(fs.readFileSync("./crea.json", "utf8"))
const moment = require('moment');
const fetch = require('node-fetch');
client.commands = new Discord.Collection(); 
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"];
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"];
client.login(token);


client.on("message", message => {
    if (message.content.startsWith(pref + "invite")) {
        
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        const invite = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Click [ici](https://discord.com/oauth2/authorize?client_id=733971257619513385&scope=bot&permissions=8) pour m'inviter !\nEt click [ici](https://discord.gg/p4dUdhf) pour rejoindre le support !")
            .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send(invite);
    }
});


client.on("ready", () => {
    console.log("invite.js a démarré")
});
