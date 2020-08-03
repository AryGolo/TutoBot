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
const pref = caca["prefix"]
const neezay = JSON.parse(fs.readFileSync("./token.json", "utf8"));
const token = neezay["token"]
client.login(token);


client.on("message", message => {
    if (message.content.startsWith(pref+'ban')) {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      
      
      
      const member = message.mentions.members.first();  
      const date = new Date();
      let raison= string = message.content.split(" ").slice(2).join(" ");
        if (!member) {
          return message.channel.send(
            `**Mentionnez la personne que vous voulez ban**`
          )
        } 

       

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Tu n'a pas les perms**");
      const clement = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("Ban!")
      .setDescription(`Tu as été banni de \`${message.guild.name}\`.\nBanni par \`${message.author.tag}\`.\nAvec comme raison : \`${raison}\``)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp();
      message.mentions.members.first().send(clement).catch(console.error());
        const gayy = message.guild.member(member);
        const sexe = new Date();
  
 
      if(message.author.id === member.id) return message.channel.send("**Tu ne peux pas t'auto ban.**")
        if (gayy) {
          gayy.ban({
            reason: `${raison} - ban par ${message.author.tag} le ${sexe.toLocaleDateString()} à ${sexe.toLocaleTimeString()}`,
          }).then(() => {
            message.channel.send(`${member} a été ban pour comme raison : **${raison}**`)
           // message.mentions.members.first().send(`Vous avez été banni de **${message.guild.name}** par ${message.author} avec comme raison : **${raison}**`).catch(error => console.log());
          })
          .catch(error => message.channel.send('**Je ne peux pas ban cette personne, verifiez la hiérarchie des roles**'));
      
        } 
        }
    });


    

client.on("ready", () => {
  console.log("modo.js a démarré")
});
