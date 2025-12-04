import { exec } from "node:child_process";
import assert from "node:assert";

await exec("yarn duplicates", (err, stdout) => {
  assert.match(stdout, /eslint-visitor-keys/);
  assert.match(stdout, /npm:4.2.1/);
  assert.match(stdout, /npm:3.4.3/);
});
