import { Application } from "express-ws";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";

export function postLogout(app: Application) {
  app.post("/api/logout", authenticationMiddleware, (req, res) => {
    res.clearCookie("ssid");
    res.send()
  });
}