// commands/8ball2.js
module.exports = {
  name: "8ball2",
  description: "Bola 8 para outro usuário",
  run: async ({ sock, msg, args }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention || args.length < 1) return await sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém e faça uma pergunta." });
    const responses = ["Sim 🔥", "Não ❌", "Talvez… 🤔", "Nunca… ☠️", "Certamente… 🏹"];
    const answer = responses[Math.floor(Math.random()*responses.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `🎱 Pergunta para @${mention.split("@")[0]}: ${args.join(" ")}\nResposta: ${answer}`, mentions: [mention] });
  }
};