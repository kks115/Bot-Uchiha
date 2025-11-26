// commands/link-gp2.js
module.exports = {
  name: "link-gp2",
  description: "Gera link do grupo",
  run: async ({ sock, msg }) => {
    if (!msg.key.remoteJid.endsWith("@g.us")) return await sock.sendMessage(msg.key.remoteJid, { text: "💀 Isso só funciona em grupos, seu ninja." });
    try {
      const link = await sock.groupInviteCode(msg.key.remoteJid);
      await sock.sendMessage(msg.key.remoteJid, { text: `🔗 Link do grupo: https://chat.whatsapp.com/${link}` });
    } catch(e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, { text: "⚠️ Não consegui gerar o link… tente novamente." });
    }
  }
};