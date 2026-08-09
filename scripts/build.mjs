import { cp, mkdir, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");
const pages = [
  "index.html",
  "publication-category.html",
  "mentoring-students.html",
  "blog.html",
  "an-obfuscated-journey.html",
  "side-channel.html",
  "teaching.html",
  "talks.html",
  "notes.html"
];
const required = [
  ...pages,
  "styles.css",
  "script.js",
  "assets/miryam-huang.png"
];

for (const file of required) {
  const filePath = resolve(root, file);
  await stat(filePath);
}

const css = await readFile(resolve(root, "styles.css"), "utf8");

for (const page of pages) {
  const html = await readFile(resolve(root, page), "utf8");
  if (!html.includes("id=\"main-content\"")) {
    throw new Error(`${page} is missing its main content landmark.`);
  }
}

if (!css.includes("@media (max-width: 720px)")) {
  throw new Error("The responsive stylesheet is missing its mobile layout.");
}

await mkdir(resolve(output, "assets"), { recursive: true });
for (const page of pages) {
  await cp(resolve(root, page), resolve(output, page));
}
await cp(resolve(root, "styles.css"), resolve(output, "styles.css"));
await cp(resolve(root, "script.js"), resolve(output, "script.js"));
await cp(resolve(root, "assets/miryam-huang.png"), resolve(output, "assets/miryam-huang.png"));
await cp(resolve(root, ".nojekyll"), resolve(output, ".nojekyll"));

console.log("Build complete: dist/");
