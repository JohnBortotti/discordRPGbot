const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot online: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.get("690572473749471265");
  channel.send("--------------------------------//--------------------------------");
  channel.send(` **${member.user.username}** Entrou no server, Seja bem vindo jogador! `);

  member.addRole('690595308480233533');
  channel.send(` **${member.user.username}** foi adicionado como jogador`);
  channel.send(`use o **!rpg regras**`);
  channel.send("--------------------------------//--------------------------------");
});

client.on('message', (message) => {
  const channel = message.channel

  if (message.content === '!rpg comandos') {
    channel.send(`Comandos disponíveis: comandos, creditos, regras, anunciar_mesa, dados`)
  }

  if (message.content === '!rpg creditos') {
    channel.send(`Bot desenvolvido por: https://github.com/JohnBortotti`)
  }

  if (message.content === '!rpg regras') { 
    channel.send(`**REGRAS:** `);
    channel.send(`1-Conteúdo off-game apenas no **geral**`);
    channel.send(`2-Se você não faz parte da mesa não interfira no jogo dos outros`);
    channel.send(`3-Não usar comandos do bot fora das **mesas**, exceto o **!rpg regras**`);
    channel.send(`4-Sem flood de conteúdo/comando`)
    channel.send(`5-Apenas membros com o cargo **Mestre** podem mestrar sessões`);
    channel.send(`use: **!rpg comandos**`);
    channel.send(`**Bom jogo a todos**`);
  }

  if (message.content === '!rpg anunciar_mesa') {
    message.author.send(` ${"```"}
    Olá mestre, copie o template a seguir, edite
    com as infos da sua mesa e cole no '#anuncio-mesas'
    ____________________________________________  
   |                                            | 
   | Nome da mesa:                              | 
   |--------------------------------------------| 
   | Tema:                                      | 
   |--------------------------------------------| 
   | Sistema:                                   | 
   |--------------------------------------------| 
   | Data/Horario:                              | 
   |--------------------------------------------| 
   | Voz ou Chat:                               | 
   |--------------------------------------------| 
   | Numero de vagas:                           | 
   |____________________________________________| 
   ${"```"} `)
  }


  if (message.content === '!rpg dados') { 
    channel.send(`Dados disponíveis: d4, d8, d6, d10, d12, d20`);
    channel.send(`Use: **!rpg rolar d(dado)**`);
  }

  if (message.content === '!rpg rolar d4') {
    channel.send(`**${message.member.user.username}** está rolando um **D4**`);
    const rolagem = Math.floor(Math.random() * 4) + 1;
    if (rolagem === 4) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }

  if (message.content === '!rpg rolar d6') {
    channel.send(`**${message.member.user.username}** está rolando um **D6**`);
    const rolagem = Math.floor(Math.random() * 6) + 1;
    if (rolagem === 6) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }

  if (message.content === '!rpg rolar d8') {
    channel.send(`**${message.member.user.username}** está rolando um **D8**`);
    const rolagem = Math.floor(Math.random() * 8) + 1;
    if (rolagem === 8) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }

  if (message.content === '!rpg rolar d10') {
    channel.send(`**${message.member.user.username}** está rolando um **D10**`);
    const rolagem = Math.floor(Math.random() * 10) + 1;
    if (rolagem === 10) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }

  if (message.content === '!rpg rolar d12') {
    channel.send(`**${message.member.user.username}** está rolando um **D12**`);
    const rolagem = Math.floor(Math.random() * 12) + 1;
    if (rolagem === 12) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }


  if (message.content === '!rpg rolar d20') {
    channel.send(`**${message.member.user.username}** está rolando um **D20**`);
    const rolagem = Math.floor(Math.random() * 20) + 1
    if (rolagem === 20) {
      channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else if (rolagem === 1) {
      channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
      channel.send(`Resultado: ` + `**${rolagem}**`);
    } else {
    channel.send(`Resultado: ` + `**${rolagem}**`);
    }
  }

});

client.login("NjkwNTcxNjA5OTk1NjA4MDY0.XnV4Wg.1AvqbNHp74Gyk0kU7DsmwVSDZEI");