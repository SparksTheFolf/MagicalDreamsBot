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

    if(msg.content === 'app'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');

    }

    if(msg.content === 'app?'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');

    }

    if(msg.content === 'application'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');

    }

    if(msg.content === 'ip'){

        msg.reply('Server ip is: magicaldreams.us');

    }

    if(msg.content === 'server ip'){

        msg.reply('Server ip is: magicaldreams.us');

    }

    if(msg.content === 'shamu'){

        msg.reply(':happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy:(cant to cross emojis) ');

    }

    if(msg.content === 'managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');

    }

    if(msg.content === 'who are the managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');

    }

    if(msg.content === 'morning'){

        msg.reply('Morning to you too! :) How are you?');

    }

    if(msg.content === 'im good how are you'){

        msg.reply('I am going well, thanks for asking! :)');

    }

})