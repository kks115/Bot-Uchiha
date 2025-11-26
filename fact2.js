// commands/fact2.js
const facts = [
  "💀 As lendas Uchiha nunca esquecem.",
  "🔥 O fogo do Sharingan queima mesmo sem acender.",
  "👁️ Segredos antigos podem mudar seu destino."
];
module.exports = {
  name: "fact2",
  description: "Envia fato curioso para outro usuário",
  run: async ({ sock, msg }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) return sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém para enviar o fato curioso." });
    const text = facts[Math.floor(Math.random()*facts.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `💡 @${mention.split("@")[0]}, ${text}`, mentions: [mention] });
  }
};