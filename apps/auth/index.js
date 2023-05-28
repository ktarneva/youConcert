const express = require("express");
const createServer = require("./server");
const connectRabbitMQ = require("./rabbitmq");

const app = express();
const createServer = createServer();
app.use(express.urlencoded());

if (!process.env.RABBIT) {
  throw new Error(
    "Please specify the name of the RabbitMQ host using environment variable RABBIT"
  );
}

app.listen(8000, function () {
  console.log("Listening on port 8000");
});

app.post("/auth", function (req, res) {
  const streamkey = req.body.key;

  if (streamkey == "supersecret") {
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  res.status(403).send();
  //
});

//
// Application entry point.
//
function main() {
  return connectRabbitMQ(); // connect to RabbitMQ...
}

main()
  .then(() => console.log("Microservice online."))
  .catch((err) => {
    console.error("Microservice failed to start.");
    console.error((err && err.stack) || err);
  });
