const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const fetch = require('node-fetch');
const caca = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
const pref = caca["prefix"]
client.commands = new Discord.Collection(); 
const usersNumber = client.users.cache.size;
const guildsNumber = client.guilds.cache.size; 
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"]
client.login(token);


client.on("ready", () => {
setInterval(() => {
    client.user.setPresence({
        activity: {
            name: `tu!help | ${client.guilds.cache.size} serveurs`,
            type: "WATCHING"
        },
        status: "online",
    }, 300000);
});
})







/*
const statuts = [
    `| `+pref+`help | ${guildsNumber} serveurs et ${usersNumber} utilisateurs`

   
 ]; 
 
 client.on("ready", () => {
   const date = new Date();
   setInterval(() => {
       const random = Math.floor(Math.random() * (statuts.length - 1) + 1); 
       client.user.setActivity(statuts[random])
   }, 3000);
 });
 */

 /*
client.on("message", message => {
    if(message.content.startsWith(pref+ "statut")){
        if (message.author.id != "413423609122390016") return message.channel.send("**Seul Ary peut faire cette commande**");
        let nnnnnn= string = message.content.split(" ").slice(1).join(" ");
        message.channel.send(`**Le statut \`${nnnnnn}\` sera ajouté dans 30 secondes**`)
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: `${nnnnnn} | ${client.guilds.cache.size} serveurs`,
                type: "WATCHING"
            },
            status: "online",
        });
    }, 30000);

}
    })

*/
client.on("ready", message => {
    console.log("status.js a démarré")
})

