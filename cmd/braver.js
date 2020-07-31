const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    const braverEmbed = new Discord.MessageEmbed()
        .setAuthor("Braver", "https://imgur.com/a/24tj7uP")
        .setDescription("Braver spotkał kilku kolesi (dwóch chyba XD), bawił się z nimi w chowanego,\n po dłuższej zabawie wzieli jego rower i poszli na pole do somsiada \n gdzie zakopali mu rower, braver po wielo-letnich staraniach znalazł rower\n i go odkopał.")
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + message.author.username)
    message.delete()
    message.channel.send(braverEmbed)
}
exports.help = {
    name: "braver"
}