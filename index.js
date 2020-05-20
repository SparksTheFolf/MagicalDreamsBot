const {Client, RichEmbed } = require('discord.js')
const bot = new Client();

const PREFIX = '!'

const ping = require('minecraft-server-util')

bot.login(process.env.token);
//bot.login(token)

bot.on('ready', () =>{
    console.log('MDBot is Online!');
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'mc':
 
            if(!args[1]) return msg.channel.send('You must type a minecraft server ip')
            if(!args[2]) return msg.channel.send('You must type a minecraft server port')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
               
                msg.channel.send(Embed)
            })
        break

    }


    if(msg.content === 'website'){

        msg.reply('Here is the website: https://magicaldreams.us/');

    }

    if(msg.content === 'website?'){

        msg.reply('Here is the website: https://magicaldreams.us/');

    }

    if(msg.content === 'app'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');

    }
    
        if(msg.content === 'apply'){

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
