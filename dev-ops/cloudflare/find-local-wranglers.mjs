import { readdir, readFile } from "fs/promises";
import { parse } from "jsonc-parser";
import path from "path";
import { fileURLToPath } from "url";
const toRoot = "../.."
const ignore = ["node_modules", ".git"]

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, toRoot);


export async function findWranglers(targetFile = "wrangler.jsonc") {
  const find = async (dir) =>
    (await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map(e => {
        const full = path.join(dir, e.name);
        if (e.isDirectory() && !ignore.includes(e.name)) return find(full);
        if (e.isFile() && e.name === targetFile) return [full];
        return [];
      })
    )).flat();

  const results = [];
  for (const file of await find(rootDir)) {
    try {
      const { name, routes } = parse(await readFile(file, "utf8"));
      results.push({ file, name, routes });
    } catch (e) {
      console.error(`❌ Failed ${file}:`, e.message);
    }
  }

  return results;
}
