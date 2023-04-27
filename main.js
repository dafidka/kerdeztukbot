const Discord = require("discord.js");
const fs = require('fs');

const client = new Discord.Client();

var b_valasz = false;
var token = fs.readFileSync('token', 'utf8');

function random(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}


client.on('message', gotMessage);

client.on('ready', () => {
    console.log('Bot is online!')
    client.user.setActivity('kerdeztem xd 🤡', {type: "LISTENING"}).catch(console.error);
})

function gotMessage(msg) {
    //console.log(msg.content);
    //console.log(msg.author.id);

    if (msg.author.bot) return;

    if (msg.content.includes !== '$' && b_valasz && msg.author.id != myID) {

        switch (random(0,4)) {
            case 1: msg.channel.send('uzenet 1');
                break;
            case 2: msg.channel.send('uzenet 2');
                break;
            case 3: msg.channel.send('uzenet 3');
                break;
        }
    }

    if (msg.content.startsWith('$')) {
        //msg.channel.send('kerdeztuk');
        
        if (msg.content.includes('valasz') || msg.content == '$v') {
            b_valasz = !b_valasz;
            switch (b_valasz) {
                case true: msg.channel.send('valasz bekapcsolva');
                    break;
                case false: msg.channel.send('valasz kikapcsolva');
                    break;
                
            }
        }
    }

}











client.login(token)
