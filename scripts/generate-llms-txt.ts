import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { generateLlmsTxt } from "../src/lib/llms-txt";

const outputPath = join(process.cwd(), "public/llms.txt");

writeFileSync(outputPath, generateLlmsTxt(), "utf8");
console.log(`Generated ${outputPath}`);
