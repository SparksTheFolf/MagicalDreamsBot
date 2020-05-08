const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('MDBot is Online!');
})

bot.on('message', msg=>{

    if(msg.content === 'website'){

        msg.reply('Here is the website: https://magicaldreams.us/');

    }

})