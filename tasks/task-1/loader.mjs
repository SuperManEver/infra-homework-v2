import fs from 'node:fs/promises';
import yaml from 'yaml';

export async function resolve(specifier, context, nextResolve) {
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  // Intercept .txt files and turn them into an ES module.
  if (url.endsWith('.yaml') || url.endsWith('.yml')) {
    const text = await fs.readFile(new URL(url), 'utf8');

    const data = yaml.parse(text);

    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify(data)};`,
    };
  }

  // Defer to the next loader (or Node default).
  return nextLoad(url, context);
}
