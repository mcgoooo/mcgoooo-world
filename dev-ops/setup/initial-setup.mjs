#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import inquirer from "inquirer";
import { updatePrefix } from "../cloudflare/updatePrefix.mjs";
import { updateRoot } from "../cloudflare/updateRoot.mjs";
program.version("1.0.0").description("Wrangle the wranglers");

program.action(async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "domainName",
        message: "What is the root domain name?",
      },
      {
        type: "input",
        name: "zoneId",
        message: "What is the Zone ID of the domain name, this can be found in the Cloudflare overview page for the domain",
      },

    ])
    await updateRoot(answers.domainName,answers.zoneId,"web","production")
    await updatePrefix(answers.domainName,answers.zoneId,"api","api","production")

    await updateRoot(answers.domainName,answers.zoneId,"web","staging")
    await updatePrefix(answers.domainName,answers.zoneId,"api","api","staging")

    console.log(chalk.green("Updated wrangler files for web app"));
  });

program.parse(process.argv);
