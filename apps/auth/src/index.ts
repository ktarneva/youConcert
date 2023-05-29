import { log } from "logger";
import createServer from "./server";

const server = createServer();
const port = 3002;

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.listen(8000, function () {
  console.log("Listening on port 8000");
});

server.post("/auth", function (req,res) {
  const streamkey = req.body.key;

  if (streamkey == "supersecret") {
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  res.status(403).send();
  //
});


