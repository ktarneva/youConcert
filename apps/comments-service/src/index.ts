import { CommentsRouter } from "./routes/commentsRoutes";
import { createServer } from "./server";
import { log } from "logger";

const port = process.env.COMMENTS_SERVICE_PORT || 3007;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.use("", CommentsRouter());
