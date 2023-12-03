const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Work')
})

app.listen(port, () => {
  console.log(`Su aplicación está escuchando en el puerto. ${port}`)
})

/* Load all events */
fs.readdir("./eventos/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    console.log(`👌 Eventos cargados: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./eventos/${file}`)];
  });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./comandos/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./comandos/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log(`👌 Comandos cargando: ${commandName}`);
  });
});

// Login
client.login("Token del Bot");
