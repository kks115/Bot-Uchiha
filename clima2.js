// commands/clima.js
const fetch = require("node-fetch");
const config = require("../config");
module.exports = {
  name: "clima2",
  description: "Informa o clima de uma cidade",
  run: async ({ sock, msg, args }) => {
    if (!args.length) return await sock.sendMessage(msg.key.remoteJid, { text: "❌ Me diga uma cidade, ninja preguiçoso." });
    const city = args.join(" ");
    try {
      const key = config.weatherApiKey;
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=pt`);
      const data = await res.json();
      if (data.cod !== 200) return sock.sendMessage(msg.key.remoteJid, { text: `💀 Cidade não encontrada: ${city}` });
      const text = `🌡️ Clima em ${data.name}:\nTemperatura: ${data.main.temp}°C\nDescrição: ${data.weather[0].description}\nHumidade: ${data.main.humidity}%`;
      await sock.sendMessage(msg.key.remoteJid, { text });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, { text: "⚠️ Falha ao buscar o clima… até o Uchiha mais poderoso não conseguiu." });
    }
  }
};
};