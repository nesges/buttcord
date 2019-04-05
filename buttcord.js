// buttcord.js - buttons for discord
// Thomas Nesges <thomas@nesges.eu> 
//
// forward every COMMAND you send to :8080/send?c=COMMAND to 
// the discord channel env.BUTTCORDCHANNEL using a user account
// most bots will ignore botaccounts, so it's important to use
// the token of an actual user
//
// Installation:
//  npm install discord.js
//  npm install node-rest-server
//  export BUTTCORDTOKEN=<USERTOKEN>
//  export BUTTCORDCHANNEL=<CHANNELID>
//
// How to find your token: https://discordhelp.net/discord-token
// How to find your channelid: type \#channelname in discord

const Discord = require('discord.js');
const RestServer = require('node-rest-server').default;

const cord = new Discord.Client();
cord.login(process.env.BUTTCORDTOKEN);

cord.on('ready', () => { 
    const channel = cord.channels.get(process.env.BUTTCORDCHANNEL);

    RestServer({
        '/send': {
            method: 'GET',
            status: 200,
            controller: requestData => {
                channel.send(requestData.queryParams.c)
                    .then(function(data){
                        return { 
                            status: 200,
                            payload: 'ok'
                        };
                    })
                    .catch(function(err){
                        return { 
                            status: 500,
                            payload: err
                        };
                    })
            }
        },
    }, {
        port: 8080
    });
});