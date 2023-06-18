import { CommentsRouter } from "./routes/commentsRoutes";
import { createServer } from "./server";
import util from "util";

const port = process.env.COMMENTS_SERVICE_PORT || 3007;
const server = createServer();

server.listen(port, () => {
  util.log(`api running on ${port}`);
});

server.use("", CommentsRouter());
