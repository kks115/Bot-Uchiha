import { Request, Response } from "express";
import { sendMessage } from "../cloud.js";
import { baseMenu } from "../menus/baseMenu.js";
import { uchihaTheme } from "../menus/uchihaTheme.js";

export async function receiveMessage(req: Request, res: Response) {
  const entry = req.body.entry?.[0];
  const changes = entry?.changes?.[0];
  const message = changes?.value?.messages?.[0];

  if (!message) return res.sendStatus(200);

  const from = message.from;
  const text = message.text?.body?.toLowerCase() || "";

  if (text === "menu") {
    await sendMessage(from, uchihaTheme + "\n" + baseMenu);
  } else {
    await sendMessage(from, "Digite *menu* para ver as opções.");
  }

  return res.sendStatus(200);
}
