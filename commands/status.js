const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const fetch = require('node-fetch');
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"];
client.commands = new Discord.Collection(); 
const usersNumber = client.users.cache.size;
const guildsNumber = client.guilds.cache.size; 
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"];

client.login(token);

client.on("ready", () => {
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: `tu!help | ${client.guilds.cache.size} serveurs`,
                type: "WATCHING"
            },
            status: "online",
        });
    }, 30000);
});

client.on("ready", () => {
    console.log("status.js a démarré");
});

