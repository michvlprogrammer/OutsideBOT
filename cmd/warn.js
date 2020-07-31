const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('> Nie masz wymaganych permisji!!')

    var user = message.mentions.users.first();
    if(!user) return message.channel.send("> Nie oznaczyłeś osoby, która chcesz upomnieć");
    
    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member) {
        if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("> Nie możesz upomnieć tej osoby");
    }
    if(!member) return message.channel.send("> Nie ma takiej osoby na serwerze!");

    var reason = args.splice(1).join(' ');
    if(!reason) return message.channel.send("> Nie podałeś powodu upomnienia");
    
    if(!args[0]) return message.channel.send("> Poprawne użycie: .warn <@user> <powód>")

    var channel = message.guild.channels.cache.find(c => c.name === "🔐┇logi");

    var log = new Discord.MessageEmbed()
        .setTitle("Użytkownik upomniany")
        .addField("Użytkownik", user)
        .addField("Przez", message.author.username)
        .addField("Powód", reason)
        .setColor("0x006b46")
        .setFooter("OutsideBOT | " + message.author.username)
    channel.send(log);


    var msg = new Discord.MessageEmbed()
        .setTitle("Zostałeś upomniany")
        .setColor("0x006b46")
        .setDescription(reason)
        .setFooter("OutsideBOT | " + message.author.username)

    try {
        user.send(msg)
    } catch(err) {
        console.warn(err)
    }

}

exports.help = {
    name: "warn"
}