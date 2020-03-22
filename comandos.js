module.exports = {
  onMessage: (message) => {

    const channel = message.channel;
    const [command, ...args] = message.content.slice(1).split(" ");

    if (message.content === '!rpg comandos') {
      channel.send(`Comandos disponíveis: comandos, creditos, anunciar_mesa, iniciar_mesa, dados`)
    }

    if (message.content === '!rpg creditos') {
      channel.send(`Bot desenvolvido por: https://github.com/JohnBortotti`)
    }

    if (message.content === '!rpg anunciar_mesa') {
      if (message.member.roles.some(role => role.name === 'Mestre'))  {
        message.author.send(` ${"```"}
        Olá mestre, copie o template a seguir, edite
        com as infos da sua mesa e cole no '#anuncio-mesas'
      ______________________________________________  
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
      message.author.send("ei, não esquece de colocar entre ``` pro seu texto sair identado");
    } else {
      channel.send("Você precisa ter o cargo **Mestre**");
    }
  }
    
    if (message.content.startsWith('!rpg iniciar_mesa')) {
      if (message.member.roles.some(role => role.name === 'Mestre')) {
        if (!args[1]) {
          channel.send('**Obrigatório o nome da mesa**')
          channel.send('Use: **!rpg iniciar_mesa nome_da_mesa**');
        } else { 
          const data = new Date().toDateString();
          channel.send(`@everyone **${message.member.user.username}** está iniciando a mesa **${args[1]}**`)  
          message.author.send(`${"```"}Olá Mestre, você está iniciando a mesa: ${args[1]} - data: ${data}, respeite as regras e divirta-se${"```"}`);
        }
      } else {
        channel.send("Você precisa ter o cargo **Mestre**");
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