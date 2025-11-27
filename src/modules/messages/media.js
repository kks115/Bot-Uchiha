export const mediaMessages = {
  playResult: (data) => {
    return `*lıl.ılı.lıll「𝐏𝐋𝐀𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄」llı.ıllı.ılı* \n*📄 Título:* ${data.resultado[0].title}\n*👤 Canal:* ${data.resultado[0].author.name}\n*🕑 Duração:* ${data.resultado[0].timestamp}\n*📆 Postagem:* ${data.resultado[0].ago}\n*🌐 Id do video:* ${data.resultado[0].videoId}\n*📁 Formato:* Mp3\n*👀 Visualizações:* ${data.resultado[0].views}\n*🤖 Bot: _UCHIHA-BOT_*\n*🖇 Link:* ${data.resultado[0].url}`;
  },
  playVideo: (data) => {
    return `*lıl.ılı.lıll「𝐏𝐋𝐀𝐘 𝐕Í𝐃𝐄𝐎」llı.ıllı.ılı*\n*📄 Título:* ${data.resultado[0].title}\n*👤 Canal:* ${data.resultado[0].author.name}\n*🕑 Duração:* ${data.resultado[0].timestamp}\n*📆 Postagem:* ${data.resultado[0].ago}\n*👀 Visualizações:* ${data.resultado[0].views}\n*🖇 Link:* ${data.resultado[0].url}`;
  }
};
export default mediaMessages;