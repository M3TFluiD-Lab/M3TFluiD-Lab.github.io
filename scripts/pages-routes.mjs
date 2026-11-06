import { copyFile, mkdir } from "node:fs/promises";

const routes = ["team", "education", "research", "publications", "news", "facilities", "equipment", "contact", "outreach"];
for (const route of routes) {
  const directory = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await copyFile(new URL("../dist/index.html", import.meta.url), new URL("index.html", directory));
}
