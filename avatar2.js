// commands/avatar2.js
module.exports = {
  name: "avatar2",
  description: "Envia o avatar de outro usuário pelo @",
  run: async ({ sock, msg, args }) => {
    const mention = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention) return await sock.sendMessage(msg.key.remoteJid, { text: "❌ Mencione alguém para ver o avatar, preguiçoso." });
    try {
      const url = await sock.profilePictureUrl(mention).catch(()=>null);
      if (!url) return sock.sendMessage(msg.key.remoteJid, { text: "💀 Não consegui encontrar o avatar…" });
      await sock.sendMessage(msg.key.remoteJid, { image: { url }, caption: `🖼️ Avatar de @${mention.split("@")[0]}`, mentions: [mention] });
    } catch(e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, { text: "⚠️ Erro ao buscar avatar… até um Uchiha poderoso falha." });
    }
  }
};