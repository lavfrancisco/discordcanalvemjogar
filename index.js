const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NjEyNjYxMjU1OTMyNDc3NDQw.XVl09A.d1cY83cpbNYH9pvPhLbuYrOPFHo');

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('612683145904652298').send(member.user.username+' Entrou no server!');
})

bot.on("message", message => {
    let responseObject = {
        "oi" : "Olá" ,
        "!youtube" : "http://www.youtube.com/vemjogar"
    }
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
});



bot.on('ready', () =>
{
    bot.user.setActivity('FortNite');
    console.log('logado!');
});
