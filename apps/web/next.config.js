const path = require("path");
require("dotenv").config({ path: "../../.env" });


module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
