const Discord = require('discord.js');
const config = require('../ayarlar.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
      .addField("Invite Link", "[Katılmak için tıkla](https://discord.gg/GWFzMjc)")
    .addField("Support Sunucusu", "[Katılmak için tıkla](https://discord.gg/GWFzMjc)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "davet"
}
