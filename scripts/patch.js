const fs = require('node:fs');

const file = 'node_modules/@nx/vite/src/plugins/plugin.js';
const content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `async (configFilePath, options, context)=>{`,
    `
    async (configFilePath, options, context)=>{
    //PATCHED
    console.log('>>>> VITE PATCH 1');
    return {};
    `
  );
  fs.writeFileSync(file, updated);
  console.log(fs.readFileSync(file).toString());
} else {
  console.log('already patched');
}
