const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('> Nie masz wymaganych permisji!!')

    let botmessage = args.join(" ")
    message.delete()
    message.channel.send(botmessage)
}

exports.help = {
    name: 'say'
}