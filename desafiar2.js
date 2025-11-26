// commands/desafiar2.js
const dares = [
  "🔥 Envie um meme sinistro para o grupo!",
  "☠️ Conte uma piada horrível.",
  "👁️ Desafie alguém no grupo a um duelo de memes."
];
module.exports = {
  name: "desafiar2",
  description: "Envia desafio para outro usuário",
  run: async ({ sock, msg }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) return sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém para desafiar." });
    const text = dares[Math.floor(Math.random()*dares.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `🕹️ @${mention.split("@")[0]}, desafio: ${text}`, mentions: [mention] });
  }
};