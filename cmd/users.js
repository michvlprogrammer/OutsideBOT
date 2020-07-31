const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const embedUsers = new Discord.MessageEmbed()
        .setAuthor("Serwer", "https://imgur.com/a/24tj7uP")
        .addField("Nazwa:", message.guild.name)
        .addField("Właściciel:", message.guild.owner)
        .addField("Użytkownicy", message.guild.memberCount)
        .addField("BOT:", message.guild.bot)
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + message.author.username)
    message.channel.send(embedUsers)
}

exports.help = {
    name: 'users'
}