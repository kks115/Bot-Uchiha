// commands/sticker.js
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
module.exports = {
  name: "sticker",
  description: "Transforma imagem em sticker",
  run: async ({ sock, msg }) => {
    try {
      const type = Object.keys(msg.message)[0];
      if (type !== "imageMessage") return await sock.sendMessage(msg.key.remoteJid, { text: "💀 Só consigo transformar imagens em sticker, não tente me enganar." });

      const buffer = await sock.downloadMediaMessage(msg);
      const sticker = new Sticker(buffer, { pack: "Uchiha", author: "Bot Mortal", type: StickerTypes.FULL });
      const out = await sticker.toBuffer();
      await sock.sendMessage(msg.key.remoteJid, { sticker: out });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, { text: "⚠️ Algo deu errado ao criar o sticker. Até o Madara ficaria irritado." });
    }
  }
};