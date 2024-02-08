const fs = require('node:fs');

let file, content;

file = 'node_modules/@nx/vite/src/plugins/plugin.js';
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `async (configFilePath, options, context)=>{`,
    `
    async (configFilePath, options, context)=>{
    //PATCHED
    console.log('>>>> VITE RUNNING');
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}

file = 'node_modules/@nx/jest/src/plugins/plugin.js';
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `async (configFilePath, options, context) => {`,
    `
    async (configFilePath, options, context)=>{
    //PATCHED
    console.log('>>>> JEST RUNNING');
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}

file = 'node_modules/@nx/playwright/src/plugins/plugin.js';
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `async (configFilePath, options, context) => {`,
    `
    async (configFilePath, options, context)=>{
    //PATCHED
    console.log('>>>> PLAYWRIGHT RUNNING');
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}
