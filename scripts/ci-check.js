const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = process.cwd();
const SKIP_DIRS = new Set(["node_modules", ".git", ".github"]);

function getJsFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) {
                files.push(...getJsFiles(path.join(dir, entry.name)));
            }
            continue;
        }

        if (entry.isFile() && entry.name.endsWith(".js")) {
            files.push(path.join(dir, entry.name));
        }
    }

    return files;
}

const jsFiles = getJsFiles(ROOT).sort((a, b) => a.localeCompare(b));
let hasErrors = false;

for (const filePath of jsFiles) {
    const result = spawnSync(process.execPath, ["--check", filePath], {
        stdio: "inherit",
    });

    if (result.status !== 0) {
        hasErrors = true;
    }
}

if (hasErrors) {
    process.exit(1);
}

console.log("Syntax check passed.");
