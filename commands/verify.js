const {Client, RichEmbed, message, member, guildMember, serverNewMember, guildMemberAdd, roles, role} = require('discord.js')
module.exports = {
    name: 'verify',
    discription: 'Verify for the member',

    execute(message, msg){
        msg.reply(msgArgs).then(messageReaction =>{
            messageReaction.react("✅");
            });
    },
    execute(guildMember, member){

        if(messageReaction.react){
            let mainrole = msg.guild.roles.find(role => role.name === "{Verified}");
            member.addRole(mainrole.id)
        } else{
            return;
        }

    },
}