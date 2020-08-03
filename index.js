const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const moment = require('moment');
const fetch = require('node-fetch');
const { error } = require("console");
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"]
client.commands = new Discord.Collection(); 
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"]
  

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} commandes en chargement dans "commands"`); 
    files.forEach(f => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.name, props);    
    });

});

fs.readdir('./cours/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} commandes en chargement dans "cours"`); 
    
    files.forEach(f => {
        let props = require(`./cours/${f}`);
        client.commands.set(props.name, props);    
    });

}); 

fs.readdir('./xp/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} commandes en chargement dans "xp"`); 
    
    files.forEach(f => {
        let props = require(`./xp/${f}`);
        client.commands.set(props.name, props);  
    });

});

client.on("ready", () => {
    console.log("index.js a démarré");
});

client.login(token);
