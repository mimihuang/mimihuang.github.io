import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = process.cwd();

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8"
};

const server = createServer((request, response) => {
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const resolvedPath = normalize(join(root, relativePath));

  if (!resolvedPath.startsWith(root) || !existsSync(resolvedPath) || statSync(resolvedPath).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes[extname(resolvedPath)] || "application/octet-stream"
  });
  createReadStream(resolvedPath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local URL: http://127.0.0.1:${port}`);
});
