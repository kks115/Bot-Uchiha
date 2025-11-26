// commands/abracar-geral.js
module.exports = {
  name: "abracar-geral",
  description: "Abraça todos os membros do grupo",
  run: async ({ sock, msg }) => {
    if (!msg.key.remoteJid.endsWith("@g.us")) return await sock.sendMessage(msg.key.remoteJid, { text: "💀 Só funciona em grupos." });
    const group = await sock.groupMetadata(msg.key.remoteJid);
    for (let member of group.participants) {
      await sock.sendMessage(msg.key.remoteJid, { text: `🤗 Abraço para @${member.id.split("@")[0]} do clã Uchiha!`, mentions: [member.id] });
    }
  }
};