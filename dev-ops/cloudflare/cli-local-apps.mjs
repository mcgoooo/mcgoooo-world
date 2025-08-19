#!/usr/bin/env node
import { findWranglers } from "./find-local-wranglers.mjs";

const envs = [{
  name: "production",
  file: "wrangler.jsonc"
}, {
  name: "staging",
  file: "wrangler.staging.jsonc"
}];

for (const env of envs) {
  console.log(`\n<${env.name.toUpperCase()} (${env.file})>`);
  const results = await findWranglers(env.file);
  console.log(JSON.stringify(results, null, 2));
  console.log(`</${env.name.toUpperCase()}>`);
}
