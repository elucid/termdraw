#!/usr/bin/env bun

import { runTermDrawAppCli } from "./main.js";

runTermDrawAppCli().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
});
