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


const talkedRecently = new Set();
client.on('message', message => {
if (message.content.startsWith(pref+'report')) {   

let anta= string = message.content.split(" ").slice(1).join(" ");
  if (message.content.includes("@")) return;
  if (message.guild.name.includes("@")) return message.channel.send("**Le nom de votre serveur contient un `@`, veuillez le retirer pour envoyer des messages au staff de TutoBot.**")
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  if (talkedRecently.has(message.author.id)) { 
    message.reply("**attends 10 minutes avant de refaire cette commande**")
} else {   
    message.channel.send("Reagissez avec ✅ pour envoyer `" + anta +"` !").then(() => message.react('✅'))

    const filter = (reaction, member) => {
        return ['✅'].includes(reaction.emoji.name) && member.id === message.author.id;
};
message.awaitReactions(filter, { max: 1, time: 9000, errors: ["time"]})
.then(collected => {
    const reaction = collected.first(); 
    message.guild.channels.cache.get(message.channel.id).createInvite()
    .then((invite= Discord.Invite) => {


        if (reaction.emoji.name === '✅') {
            client.channels.cache.get("722061844289683476").send(`${message.author} dans **${message.guild.name}** => ${invite.url} : \`${anta}\``) .then(() => message.channel.send(`**\`${anta}\` a été envoyé <a:chel:702576057240387614>**`)).then(() => message.delete(    )) 
            .catch(error => console.log())
        }
    })
})   
talkedRecently.add(message.author.id); setTimeout(() => {  talkedRecently.delete(message.author.id); 
       
}, 600000); } 


}

}) 



client.on("ready", () => {
    console.log("report.js a démarré")
});

