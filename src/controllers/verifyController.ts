import { Request, Response } from "express";
import logger from "../utils/logger";

export function verifyToken(req: Request, res: Response) {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    logger.info("Webhook verificado com sucesso");
    return res.status(200).send(challenge as string);
  }

  logger.warn("Falha na verificação do webhook");
  return res.sendStatus(403);
}
