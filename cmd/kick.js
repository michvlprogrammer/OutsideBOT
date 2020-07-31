const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission(['KICK_MEMBERS'])) return message.channel.send('> Nie masz wymaganych permisji!!')

    var user = message.mentions.users.first();
    if(!user) return message.channel.send("> Nie oznaczyłeś osoby, która chcesz wyrzucić");

    if(!args[0]) return message.channel.send("> Poprawne użycie: .kick <@user> <powód>")
    
    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
    if(!member) return message.channel.send("> Nie ma takiej osoby na serwerze!");

    var reason = args.splice(1).join(' ');
    if(!reason) return message.channel.send("> Nie podałeś powodu wyrzucenia");

    var channel = message.guild.channels.cache.find(c => c.name === "🔐┇logi");

    var log = new Discord.MessageEmbed()
        .setTitle("Użytkownik wyrzucony")
        .addField("Użytkownik", user)
        .addField("Przez", message.author.username)
        .addField("Powód", reason)
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + message.author.username)
    channel.send(log);


    var msg = new Discord.MessageEmbed()
        .setTitle("Zostałeś wyrzucony")
        .setColor("0x006b46")
        .setDescription(reason)
        .setFooter("OutsideBOT | " + message.author.username)

    try {
        await user.send(msg)
    } catch(err) {
        console.warn(err)
    }

    member.kick(reason)
}

exports.help = {
    name: "kick"
}