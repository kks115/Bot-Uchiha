// commands/motivar.js
const fetch = require("node-fetch");
module.exports = {
  name: "motivar",
  description: "Envia mensagem motivacional",
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      const quote = data[Math.floor(Math.random()*data.length)];
      await sock.sendMessage(msg.key.remoteJid, { text: `💪 "${quote.text}" — ${quote.author || "Desconhecido"}` });
    } catch(e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, { text: "💀 Não consegui buscar motivação… tente novamente." });
    }
  }
};};