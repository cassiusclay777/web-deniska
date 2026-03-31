/**
 * Pro Vercel: výstup do `public/` (Output Directory).
 * Kopíruje statiku z kořene; bez fs.cpSync (na některých Win+Node kombinacích padá).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pub = path.join(root, "public");

const skipDirs = new Set([
  "node_modules",
  ".git",
  "public",
  ".vercel",
  "scripts",
  ".vscode",
  "denisa_site",
]);

const skipFiles = new Set([
  "package.json",
  "package-lock.json",
  "vercel.json",
  ".gitignore",
  "README.md",
]);

function copyRecursive(src, dst) {
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dst, name));
    }
  } else {
    fs.copyFileSync(src, dst);
  }
}

fs.rmSync(pub, { recursive: true, force: true });
fs.mkdirSync(pub, { recursive: true });

for (const name of fs.readdirSync(root)) {
  if (skipDirs.has(name)) continue;
  if (name.startsWith(".")) continue;
  if (skipFiles.has(name)) continue;

  const src = path.join(root, name);
  const dst = path.join(pub, name);
  copyRecursive(src, dst);
}

console.log("sync-public: ok → public/");
