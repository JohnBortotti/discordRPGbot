const Discord = require('discord.js');
const client = new Discord.Client();
const mensagem = require('./comandos')

client.on('ready', () => {
  console.log(`Bot online: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.get("690572473749471265");
  channel.send("--------------------------------//--------------------------------");
  channel.send(` **${member.user.username}** Entrou no server, Seja bem vindo jogador! `);

  member.addRole('690595308480233533');
  channel.send(` **${member.user.username}** foi adicionado como jogador`);
  channel.send(`**Leia as** ${"#"}regras`);
  channel.send("--------------------------------//--------------------------------");
});

client.on('message', mensagem.onMessage)

client.login("APPKEY");