const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
require("discordjs-activity");

module.exports = {
    config: {
        name: 'sketchyartist',
        description: 'Make sketchyartist Link',
        aliases: [],
        usage: 'sketchyartist <channel ID>',
    },
	run: async (bot, message, args) => {
        if (!message.member.voice.channel){
			return message.channel.send('โปรดเข้าห้องเสียงด้วยน่ะคะ')
		}
		if (!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")){
			return message.channel.send('ขวัญต้องการสิทธิ์ในการสร้างคำเชิญด้วยนะคะ ')
		}
		
		let Invite = await message.member.voice.channel.activityInvite("879864070101172255"); //Made using discordjs-activity package 880218394199220334
		let embed = new MessageEmbed()
			.setAuthor('Sketchy Artist')
            .setColor("#ffe733")
            .addFields(
                { name: `:art:` +' |  ลิ้งสำหรับเข้า  **Sketchy Artist**  ค่ะ :', value: `https://discord.com/invite/${Invite.code}` },
            )
            .setFooter("K w a n")
            .setTimestamp(new Date())
			
		await message.channel.send(embed);	
    }
}