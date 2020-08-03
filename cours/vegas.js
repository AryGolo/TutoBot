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
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(message.content.startsWith(pref+"start Vegas")) {
        const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
        message.channel.send(content["start vegas"]);
    }


    if(message.content.startsWith(pref+"Vegas all")) {
        const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
        message.channel.send(content["Vegas all"]);
}


if(message.content.startsWith(pref+"V1")) {
    const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
    message.channel.send(content["p1"]);
}


const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
if(message.content.startsWith(pref+"V2")) {
    const v2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(content["p2"])
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail("https://media.discordapp.net/attachments/711657325869400116/736180709680611328/600px-Vegas_Pro_15.png")
        .setTimestamp();
     message.channel.send(v2);
}


if(message.content.startsWith(pref+"V3")) {
    const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
    message.channel.send(content["p3"]);
}


    if(message.content.startsWith(pref+"V4")) {
        const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
        message.channel.send(content["p4"]);
    }

    if(message.content.startsWith(pref+"V5")) {
        const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
        message.channel.send(content["p5"]);
    }


    if(message.content.startsWith(pref+"V6")) {
        const content = JSON.parse(fs.readFileSync("./vegas.json", "utf8"));
        message.channel.send(content["p6"]);
    }
});



client.on("ready", () => {
        console.log("vegas.js a démarré [cours]");
});
