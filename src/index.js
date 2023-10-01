const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    console.log(message);
});

client.login(
    'MTE1MjI5NjU0MzM1ODAzODEwNg.G9b3gw.vw_7-iQRTgELvJKWPfEqfhmw_hUznActyXvMt4'
);

