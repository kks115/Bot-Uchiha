const { Sticker, StickerTypes } = require("wa-sticker-formatter");

module.exports = {
    name: "welcome",
    execute: async (sock, msg, type) => {
        const jid = msg.key.remoteJid;
        const text = type === "welcome" ? "🎉 Bem-vindo(a) ao grupo!" : "👋 Até logo!";
        await sock.sendMessage(jid, { text });
    }
};