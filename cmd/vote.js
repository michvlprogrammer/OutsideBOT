const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission(['MANAGE_MESSAGES'])) return msg.channel.send('> Nie masz wymaganych permisji!!')

    if(!args[0]) return msg.channel.send("> Poprawne użycie: .vote <tekst>")

    const voteEmbed = new Discord.MessageEmbed()
        .setAuthor("Ankieta", "https://imgur.com/a/24tj7uP")
        .setColor("0x006b46")
        .setDescription("" + args.join(" "))
        .setFooter("OutsideBOT | " + msg.author.username)
    
    let message = await msg.channel.send(voteEmbed)

    await message.react("✔");
    await message.react("❌");

    msg.delete({timeout: 5000})
}

exports.help = {
    name: "vote"
}