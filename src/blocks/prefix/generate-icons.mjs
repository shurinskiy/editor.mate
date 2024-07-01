import { readFile, writeFile } from 'node:fs/promises';
import { getIconsCSS } from '@iconify/utils';
import { locate } from '@iconify/json';
import countries from './countries.json' assert { type: "json" };;

// Parse each icon set
let output = '';
let names = countries.reduce((acc, item) => {
	acc.push(`${item.code.toLowerCase()}-4x3`);
	return acc;
}, []);

const iconSet = JSON.parse(await readFile(locate('flag'), 'utf8'));
const css = getIconsCSS(iconSet, names, {
	pseudoSelector: true,
	commonSelector: '.prefix__icon::before',
	iconSelector: '.prefix__icon_{name}::before',
	overrideSelector: '.prefix__icon.prefix__icon_{name}::before',
});
output += css;

await writeFile('./prefix-icons.scss', output, 'utf8');
console.log(`Saved CSS (${output.length} bytes)`);