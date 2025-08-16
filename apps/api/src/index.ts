import { Hono } from "hono";
import { callbackRoute } from "./routes/callback";
import { healthCheckRoute } from "./routes/healthcheck";
import { loginRoute } from "./routes/login";
import { currentUserRoute } from "./routes/user";
import { currentUserPlaylistsRoute } from "./routes/user/playlists";
import { Env } from "./types/Env";

const app = new Hono<{ Bindings: Env }>();

[healthCheckRoute].forEach((route) => {
  app.route("/api", route);
});

[loginRoute, callbackRoute, currentUserRoute,currentUserPlaylistsRoute].forEach((route) => {
  app.route("/api/spotify", route);
});


export default app;
