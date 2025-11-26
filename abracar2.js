// commands/abracar2.js
module.exports = {
  name: "abracar2",
  description: "Abraça alguém virtualmente",
  run: async ({ sock, msg, args }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) return await sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém para abraçar." });
    const gifs = [
      "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif"
    ];
    const gif = gifs[Math.floor(Math.random()*gifs.length)];
    await sock.sendMessage(msg.key.remoteJid, { video: { url: gif }, mimetype: "video/gif", caption: `🤗 Abraço virtual para @${mention.split("@")[0]}… até o Madara ficaria emocionado.`, mentions: [mention] });
  }
};