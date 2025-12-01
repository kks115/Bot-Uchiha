import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const token = process.env.WHATSAPP_TOKEN;
const verifyToken = process.env.VERIFY_TOKEN;

// VERIFICAÇÃO DO WEBHOOK (OBRIGATÓRIA)
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const verify = req.query["hub.verify_token"];

  if (mode && verify === verifyToken) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

// RECEBENDO MENSAGENS
app.post("/webhook", async (req, res) => {
  try {
    const data = req.body;

    if (data.object) {
      const entry = data.entry?.[0]?.changes?.[0]?.value;
      const messages = entry?.messages;

      if (messages && messages[0]) {
        const msg = messages[0];
        const from = msg.from;
        const text = msg.text?.body || "";

        console.log("Mensagem recebida:", text);

        // Responder apenas se for mensagem em GRUPO
        const isGroup = from.includes("@g.us");

        if (isGroup) {
          sendMessage(from, `🔥 Uchiha Bot ativo no grupo!\nVocê disse: *${text}*`);
        }
      }
    }

    res.sendStatus(200);
  } catch (e) {
    console.error("Erro:", e);
    res.sendStatus(500);
  }
});

// Função para enviar mensagens
async function sendMessage(to, message) {
  await axios.post(
    `https://graph.facebook.com/v17.0/${process.env.PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      text: { body: message }
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
}

app.listen(process.env.PORT || 3000, () =>
  console.log("Uchiha Cloud Bot rodando!")
);
