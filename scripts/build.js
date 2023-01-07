import { copyFile, readFile, writeFile } from "fs/promises";

const source = await readFile("./package.json", "utf-8");
const object = JSON.parse(source);

// Delete unnecessary content from JSON
delete object.scripts;
delete object.devDependencies;

await writeFile(
  "./dist/package.json",
  Buffer.from(JSON.stringify(object), "utf-8")
);

// Copy over the types
await writeFile(
  "./dist/index.d.ts",
  await readFile("./src/types/index.d.ts", "utf-8")
);

// Copy the README file over.
await copyFile("./README.md", "./dist/README.md");

// Copy the LICENSE file over.
// await copyFile("./LICENSE", "./dist/LICENSE");
