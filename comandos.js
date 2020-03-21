module.exports = {
  onMessage: (message) => {

    const channel = message.channel;
    const [command, ...args] = message.content.slice(1).split(" ");

    if (message.content === '!rpg comandos') {
      channel.send(`Comandos disponíveis: comandos, creditos, regras, anunciar_mesa, iniciar_mesa, dados`)
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
      message.author.send("ei, não esquece de colocar entre ``` pro seu texto sair identado")
    }
    
    if (message.content.startsWith('!rpg iniciar_mesa')) {
      if (!args[1]) {
        channel.send('**Obrigatório o nome da mesa**')
      } else { 
          const data = new Date().toDateString();
          channel.send(`**${message.member.user.username}** está iniciando a mesa **${args[1]}**`)  
          message.author.send(`Olá Mestre, você está iniciando a mesa: **${args[1]}**, ${data}, respeite as regras e divirta-se`);
        }
    }
 
    if (message.content === '!rpg dados') {
      channel.send(`Use: **!rpg rolar (dado)**`);
    }

    if (message.content.startsWith('!rpg rolar')) {
      if (!args[1]) {
        channel.send(`Use: **!rpg rolar (dado)**`);
      } else {
          const rolagem = Math.floor(Math.random() * args[1]) + 1;
          channel.send(`**${message.member.user.username}** está rolando um **D${args[1]}**`);
          if (rolagem === parseInt(args[1])) {
            channel.send(`**${message.member.user.username}** conseguiu um **acerto crítico**`);
            channel.send(`Resultado: **${rolagem}**`);
          } else if (rolagem === 1) {
              channel.send(`**${message.member.user.username}** conseguiu uma **falha crítica**`);
              channel.send(`Resultado: **${rolagem}**`);
            } else {
                channel.send(`Resultado: **${rolagem}**`);
              }
        }
    }
  }
}