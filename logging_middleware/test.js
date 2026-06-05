const Log = require("./logger");

async function run() {
  await Log(
    "backend",
    "info",
    "controller",
    "Application started successfully"
  );
}

run();