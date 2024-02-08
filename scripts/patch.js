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
    //const absoluteConfigFilePath = (0, _devkit.joinPathFragments)(context.workspaceRoot, configFilePath);
    //const { resolveConfig } = await (0, _executorutils.loadViteDynamicImport)();
    //const viteConfig = await resolveConfig({
    //    configFile: absoluteConfigFilePath,
    //    mode: 'development'
    //}, 'build');
    //console.log('>>> vite config', viteConfig);
    return {};
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
    const playwrightConfig = await (0, config_utils_1.loadConfigFile)((0, path_1.join)(context.workspaceRoot, configFilePath));
    console.log('>>> playwright config', playwrightConfig);
    return {};
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}
