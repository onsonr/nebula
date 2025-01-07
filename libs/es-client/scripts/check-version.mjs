// scripts/check-version.mjs
import { readFileSync } from "fs";
import { execSync } from "child_process";
import { join } from "path";

async function checkNpmVersion() {
  try {
    // Read package.json
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));
    const currentVersion = pkg.version;

    console.log(`Checking version ${currentVersion} on npm...`);

    try {
      // Check if version exists on npm
      const npmInfo = execSync(`npm view ${pkg.name} versions --json`, {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "pipe"],
      });

      const publishedVersions = JSON.parse(npmInfo);

      if (publishedVersions.includes(currentVersion)) {
        console.log(`Version ${currentVersion} already exists on npm`);

        // Configure git
        execSync(
          'git config --local user.email "github-actions[bot]@users.noreply.github.com"'
        );
        execSync('git config --local user.name "github-actions[bot]"');

        // Run pnpm version patch
        console.log("Bumping patch version...");
        execSync("pnpm version patch --no-git-tag-version", {
          stdio: "inherit",
        });

        // Read new version
        const updatedPkg = JSON.parse(readFileSync("package.json", "utf8"));
        const newVersion = updatedPkg.version;

        // Commit changes
        execSync("git add package.json");
        execSync(
          `git commit -m "chore: bump version to ${newVersion} [skip ci]"`
        );

        console.log(`Version bumped to ${newVersion}`);
        process.exit(0);
      } else {
        console.log(`Version ${currentVersion} is not published yet`);
        process.exit(0);
      }
    } catch (error) {
      if (error.stderr && error.stderr.includes("404")) {
        console.log("Package not found on npm - assuming first publish");
        process.exit(0);
      }
      throw error;
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

checkNpmVersion();
