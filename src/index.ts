import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verificado com sucesso!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook", (req, res) => {
  console.log("Mensagem recebida:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Servidor rodando...");
});
