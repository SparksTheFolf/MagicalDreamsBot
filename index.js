const {Client, RichEmbed} = require('discord.js')
const bot = new Client();
var score = 110;


bot.login(process.env.token);

const PREFIX = '!'

const ping = require('minecraft-server-util')

//bot.login(process.env.token);
//bot.login(token)

bot.on('ready', () =>{
    console.log('MDBot is Online!');

    bot.user.setActivity('for !help', {type: 'WATCHING'})

    
})

//Client.on("messageDelete", (messageDelete) => {
   //     const channel = messageDelete.guild.channels.find(ch => ch.name === 'log-stuff');channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. There ID is ${messageDelete.author.id}`)
  //     }); 

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
                .addField('Server IP', "magicaldreams.us")
                .addField('Server Version', "1.15.2")
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
            .addField("People Bio's",'!chums, !cole, !kindal, !nono , !marlin, !kara, !bode , !ben, !65, !mik')

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
            .addField('Current Build Version', "v1.4.2")
            .addField('Current Score Since Build', score)
            .addField('Author', "nono(stacker_nono)")
            .addField('Website', 'https://github.com/nolant108')

           msg.reply(Embed)
           console.log(score)
    }


    switch(args[0]){
        case 'admin':

            if(!msg.member.roles.find(r => r.name === "Tod")){
                        score = score+1;
                console.log(score)
                const Embed = new RichEmbed()
                .setColor(0x2AFF00)
                .setTitle('Magical Dreams: Admin Settings')
                .addField('Current Build Version3', "hello")
            }else{

                score = score+1;
                console.log(score)

                msg.reply('YOU DO NOT HAVE PERMISSIONS').then(msg => msg.delete(10000))
            }
    
              break;
    }

    switch(args[0]){
        case 'nono':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: NONO(stacker_nono)')
            .addField('Is he the best?', 'Duno, maybe?')
            .addField('Needs to learn more JS', 'YESS')

           msg.reply(Embed)
           console.log(score)
    }

    switch(args[0]){
        case 'kindal':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: MakingMiners')
            .addField('Bio', 'We keep moving forward, opening new doors, and doing new things, because were curious and curiosity keeps leading us down new paths. Oh and by the way.. I’m Kindal tehe')
            .addField('I say...', 'Useless')


           msg.reply(Embed)
           console.log(score)
    }

    switch(args[0]){
        case 'marlin':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: Marlin')
            .addField('Google Sign In: Someone just signed into your computer, do you know them?', "Yes I know him, He's me.")
            .addField('Have a great weekend!', 'I Hope your code behaves on Monday the same way it did on Friday')

           msg.reply(Embed)
           console.log(score)
    }

    
    switch(args[0]){
        case 'chums':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: chums122')
            .addField('Yoda says', 'Only Just Begun, The meme war has')
            .addField('Did you ever hear the Tragedy of Darth Plagueis the wise?'
            , ' I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.')


           msg.reply(Embed)
           console.log(score)
    }

switch(args[0]){
    case 'cole':
       score = score+1;

        const Embed = new RichEmbed()
        .setColor(0x2AFF00)
        .setTitle('Magical Dreams: starport75')
        .addField('I say...', 'It can be anything! :)')

       msg.reply(Embed)
       console.log(score)
}

switch(args[0]){
    case 'ben':
       score = score+1;

        const Embed = new RichEmbed()
        .setColor(0x2AFF00)
        .setTitle('Magical Dreams: Ben[OhBen]')
        .addField('Ben is...', 'an awesome ride technician and trainer')
        .addField('Ben is...', 'an awesome ride technician and trainer!!!')
        .addField('Ride breaks down...', 'coffin dance plays')

       msg.reply(Embed)
       console.log(score)
}

switch(args[0]){
    case '65':
       score = score+1;

        const Embed = new RichEmbed()
        .setColor(0x2AFF00)
        .setTitle('Magical Dreams: 65Thomas')
        .addField('65 Thomas is...', 'out to lunch.')
        .addField('He’s always hungry...', 'so it might take a minute.')
        .addField('Unless you have a cookie....', 'Then he’ll come running.')

       msg.reply(Embed)
       console.log(score)
}

    switch(args[0]){
        case 'mik':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0xBD00FF)
            .setTitle('Magical Dreams: Mik (kozzy913)')
            .addField('Bee Movie?', 'Barry says "Ya like Jazz?"')
            .addField('According to all known laws of aviation,'
            , 'there is no way a bee should be able to fly.')


           msg.reply(Embed)
           console.log(score)
    }


    switch(args[0]){
        case 'bode':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: Bode (Disneyland_)')
            .addField('Whomst', 'Iz Bode')
            .addField('and BTW', 'You Just got Vectored')


           msg.reply(Embed)
           console.log(score)
    }

    switch(args[0]){
        case 'kara':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: Kara (_Kara)')
            .addField('kara is a cool kat coordinator', 'kara is a cool kat coordinator!!!!!!!!')
            .addField('And She is...', 'A Dancing Queen')
            .addField('kara gets the', 'limo out front')
            .addField("Server Mom!!", "Kara is the server mom, lol")


           msg.reply(Embed)
           console.log(score)
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

    if(msg.content === 'Good morning!'){

        msg.reply('Morning to you too! :)');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'morning'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'morning!'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'Morning!'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'Morning'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'im good how are you'){

        msg.reply('I am going well, thanks for asking! :)');
        score = score+1;

        console.log(score)
    }

    //----------------------swear filter-----------------------

/*
    let wordArray = msg.content.split(" ");
    console.log(wordArray);

    let filterWords = ['fuck', 'shit', 'hell', '$h!t', 'asshole', 'son of a bitch', 'bitches'];

    for(var i = 0; 1 < filterWords.length; i++) {
        msg.delete();
        msg.channel.send('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
            
    }

*/








    if(msg.content === 'fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'Fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'testing fucking swear filter'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'fuck me'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    
    if(msg.content === 'Fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'shit'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'hell'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === '$h!T'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === '$h!t'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'asshole'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'son of a bitch'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    //start of updating messages
    bot.on("Update", async(oldMessage, newMessage)=>{
        if(oldMessage.content == newMessage.content){
            return;
    }

    const ReportEmbed = new RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("0x00A6FF")
    .setDescripiton("A message from a user was edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    .setFooter("If this works I'm pay Kindal $100")

    let loggingChannel = newMessage.guild.channels.find(ch => ch.name === "bot-log-testing")
    if(!loggingChannel) return;

    loggingChannel.send(logEmbed);

    })

    //TempMute//
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find the ticket of this memeber!");
    if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply("How do you find out this commnand?!?!?");
    let muterole = message.guild.roles.find(`name`, "muted");

        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "00C9FF",
                    Permission: []
                })
            
                        message.guild.channels.forEach(async (channel, id) => {
                            await channel.overwritePermission(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
            
            }catch(e){
                console.log(e.stack);
            }   
        }

            let mutetime = args[1];
            if(!mutetime) return message.reply("Please input a certain ammount of time to mute the user?!?!");

            await(tomute.addRole(muterole.id));
            message.reply(`<@${tomute.id}> has been muted for ${ms(ms)(mutetime)}`);

            setTimeout(function(){
                tomute.removeRole(muterole.id);
                message.channel.send(`<@${tomute.id}> has been unmuted!`);
            }, ms(mutetime));


})

        module.exports.help = {
            name: "tempmute"
        }