const Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    const helpEmbed = new Discord.MessageEmbed()
        .setAuthor("Pomoc - Komendy", "https://imgur.com/a/24tj7uP")
        .addField("Administracyjne", "```.kick, .ban, .embed, .warn, .say, .vote```")
        .addField("4Fun", "```.braver```")
        .addField("Użytkownicze", "```.users```")
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + msg.author.username)
    msg.channel.send(helpEmbed)
}
exports.help = {
    name: "help"
}