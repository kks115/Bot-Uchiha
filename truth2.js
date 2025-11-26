// commands/truth2.js
const truths = [
  "☠️ Segredo obscuro revelado…",
  "🔥 Nem todos são confiáveis.",
  "👁️ O passado volta para assombrar."
];
module.exports = {
  name: "truth2",
  description: "Envia verdade para outro usuário",
  run: async ({ sock, msg }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) return sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém para revelar a verdade." });
    const text = truths[Math.floor(Math.random()*truths.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `🕵️ @${mention.split("@")[0]}, ${text}`, mentions: [mention] });
  }
};