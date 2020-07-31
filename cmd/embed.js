const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('> Nie masz wymaganych permisji!!')

    if(!args[0]) return message.channel.send("> Poprawne użycie: .embed <tekst>")

    const embedEMB = new Discord.MessageEmbed()
        .setAuthor("Informacja", "https://imgur.com/a/24tj7uP")
        .setDescription("" + args.join(" "))
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + message.author.username)
    message.delete()
    message.channel.send(embedEMB)
}

exports.help = {
    name: "embed"
}