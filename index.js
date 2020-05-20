const {Client, RichEmbed} = require('discord.js')
const bot = new Client();
var score = 40;


bot.login(process.env.token);

const PREFIX = '!'

const ping = require('minecraft-server-util')

//bot.login(process.env.token);
//bot.login(token)

bot.on('ready', () =>{
    console.log('MDBot is Online!');

    bot.user.setActivity('for !help', {type: 'WATCHING'})


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
                .setColor(0x3498DB)
                .setTitle('Server Status')
                .addField('Server IP', resonse.host)
                .addField('Server Version', resonse.version)
                .addField('Online players', resonse.onlinePlayers)
                .addField('Max Players', resonse.maxPlayers)
               msg.reply("Here you go, :) ")
               msg.reply(Embed)

               score = score+1;

               console.log(score)

            })
        break
 
    }

    switch(args[0]){
        case 'help':

            const Embed = new RichEmbed()
            .setColor(0xF0FF00)
            .setTitle('Magical Dreams: Help')
            .addField('Server Status', "!md")
            .addField('Managers', "managers")
            .addField('Apply for Staff', "app , apply , application")
            .addField('Server Ip', 'ip,  server ip')
            .addField('Staff Commands', '!admin')
            .addField('About MDBot', '!about')

           msg.reply(Embed)
           score = score+1;

           console.log(score)
    }

    switch(args[0]){
        case 'about':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: About')
            .addField('Current Build Version', "v1.3.7")
            .addField('Current Score Since Build', score)
            .addField('Author', "nono(stacker_nono)")
            .addField('Website', 'https://github.com/nolant108')

           msg.reply(Embed)
           console.log(score)
    }


    switch(args[0]){
        case 'admin':
            score = score+1;
            console.log(score)
            if(msg.member.roles.find(r => r.name === "Tod")) return msg.reply('YOU DO NOT HAVE PERMISSIONS').then(msg => msg.delete(5000))
                const Embed = new RichEmbed()
                .setColor(0x2AFF00)
                .setTitle('Magical Dreams: Admin Settings')
                .addField('Current Build Version3', "hello")

             
            

            
        break;
    }


    if(msg.content === 'website'){

        msg.reply('Here is the website: https://magicaldreams.us/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'website?'){

        msg.reply('Here is the website: https://magicaldreams.us/');
        score = score+1;

        console.log(score)
    }

    

    if(msg.content === 'app'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }
    
        if(msg.content === 'apply'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'app?'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'application'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'ip'){

        msg.reply('Server ip is: magicaldreams.us');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'server ip'){

        msg.reply('Server ip is: magicaldreams.us');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'shamu'){

        msg.reply(':happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy:(cant to cross emojis) ');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'who are the managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'morning'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'im good how are you'){

        msg.reply('I am going well, thanks for asking! :)');
        score = score+1;

        console.log(score)
    }

})
