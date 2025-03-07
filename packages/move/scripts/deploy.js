const { execSync } = require("child_process");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const minimist = require("minimist");
const { overrideMoveVersion } = require("../move.config.js");

function parseYaml(filePath) {
  const yamlContent = fs.readFileSync(filePath, "utf-8");
  return yaml.load(yamlContent);
}

async function main() {
  // Parse command line arguments
  const argv = minimist(process.argv.slice(2));

  // Read config to check network
  const configPath = path.join(__dirname, "../.aptos/config.yaml");
  const config = parseYaml(configPath);
  const network = config.profiles.default.network;

  // Build deploy command
  let deployCommand = "aptos move publish";

  // Add assume-yes flag
  deployCommand += " --assume-yes";

  try {
    // Execute deploy command
    console.log(`Executing: ${deployCommand}`);
    execSync(deployCommand, { stdio: "inherit" });
  } catch (error) {
    console.error("Deployment failed:", error.message);
    process.exit(1);
  }
}

main().catch(console.error);
