# buttcord

**butt**ons for dis**cord** implements a rest-server that forwards messages to a discord channel using a user account and so opens the oppurtunity to controll a discord bot via buttons on a webpage

![img](screenshot.png?raw=true)

every COMMAND you send to :8080/send?c=COMMAND is forwarded to the discord channel env.BUTTCORDCHANNEL using a user account. since most bots will ignore commands from botaccounts, it's important to use the token of an actual user

## installation
buttcord uses nodejs and is tested on debian 9 only
```
npm install discord.js
npm install node-rest-server
export BUTTCORDTOKEN=<USERTOKEN>
export BUTTCORDCHANNEL=<CHANNELID>
```

* How to find your token: https://discordhelp.net/discord-token
* How to find your channelid: type `\#channelname` in discord

## example
```
<script>
    const baseurl = 'http://yourbuttcordserver:8080/send?c=';

    function ajax(command) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", baseurl+command, true);
        xhttp.send();
    }
</script>

<ul>
    <li><a href="#" onclick="ajax('Hello World!')">Hello World!</a></li>
    <li><a href="#" onclick="ajax('.local list')">.local list</a></li>
</ul>
```
