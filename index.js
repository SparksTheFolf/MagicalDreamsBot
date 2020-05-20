const {Client, RichEmbed} = require('discord.js')
const bot = new Client();


bot.login(process.env.token);

const PREFIX = '!'

const ping = require('minecraft-server-util')

//bot.login(process.env.token);
//bot.login(token)

bot.on('ready', () =>{
    console.log('MDBot is Online!');

  //  client.user.setActivity("!mdhelp"); 
  client.user.setStatus('online', '!mdhelp') 


})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'md':


     //       if(!args[1]) return message.channel.send('You must type a minecraft server ip')
        //    if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping('magicaldreams.us', 25565, (error, resonse) =>{
                if(error) throw error

                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', resonse.host)
                .addField('Server Version', resonse.version)
                .addField('Online players', resonse.onlinePlayers)
                .addField('Max Players', resonse.maxPlayers)

               msg.reply(Embed)

            })
        break
 
    }

    switch(args[0]){
        case 'mdhelp':

            const Embed = new RichEmbed()
            .setTitle('MD: Help')
            .addField('Server Status', "!md")
            .addField('Managers', "managers")
            .addField('Apply for Staff', "app , apply , application")
            .addField('Server Ip', 'ip,  server ip')

           msg.reply(Embed)

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
