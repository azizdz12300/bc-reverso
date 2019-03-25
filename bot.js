          client.on('message', message => {
            var prefix = "+"; //walter.js#2002
                  if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط ل السيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**`ADMINISTRATOR`أنت لا تملك خاصية **' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "ITZ Bot";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**اكتب رسالة البرودكاست**');message.channel.send(`**هل أنت متأكد من ارسال البرودكاست؟ \nالبرودكاست: ** \` ${args}\``).then(msg => { //walter.js#2002
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
        
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
     reaction1.on("collect", r => {
        message.channel.send(`**☑ | عضو  __${message.guild.members.size}__ تم ارسال البرودكاست ل **`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
      
      var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('🔰السيرفر🔰', message.guild.name) //walter.js#2002
           .addField('🚩صاحب الرسالة🚩', message.author.username) //walter.js#2002
           .addField('📜الرسالة📜', args)  //walter.js#2002
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**تم الغاء البرودكاست :x:**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        }); //walter.js#2002