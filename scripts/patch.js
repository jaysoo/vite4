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
    console.log('>>>> VITE PATCHED');
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

file = 'node_modules/jest-runtime/build/index.js'
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `return new (_vm().Script)(this.wrapCodeInModuleWrapper(scriptSource), {`,
    `
    //PATCHED
    console.trace(">>> JEST RUNTIME");
    return new (_vm().Script)(this.wrapCodeInModuleWrapper(scriptSource), {
    `
  ).replace(
    `requireInternalModule(from, to) {`,
    `
    requireInternalModule(from, to) {
    console.log('>>>> requireInternalModule', from, to);
    `
  ).replace(
    `this._loadModule(`,
    `
    console.log('>>>> _loadModule', localModule, from, moduleName, modulePath);
    this._loadModule(
    `
  ).replace(
    `const transformedFile = this._scriptTransformer.transform(`,
    `
    console.log('>>> transformFile', filename, options, this._getFullTransformationOptions(options));
    const transformedFile = this._scriptTransformer.transform(`
  ).replace(
    `if (!this._environment.global) {`,
    `
    if (!this._environment.global) {
    console.log('global is torn down...');
    `
  ).replace(
    `const script = this.createScriptFromCode(transformedCode, filename);`,
    `
    console.log('>>> BEFORE createScriptFromCode', filename, transformedCode, options);
    const script = this.createScriptFromCode(transformedCode, filename);
    `
  )
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}

file = 'node_modules/jest-runner/build/runTest.js'
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `const {leakDetector, result} = await runTestInternal(`,
    `
    //PATCHED
    console.trace(">>> JEST RUNNER", config);
    const {leakDetector, result} = await runTestInternal(
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
    // `async (configFilePath, options, context) => {`,
    `calculatedTargets[hash] = targets;`,
    `
    calculatedTargets[hash] = targets;
    //PATCHED

    const { resolveConfig } = await import('vite');
    await resolveConfig({ configFile: path_1.join(context.workspaceRoot, 'apps/demo/vite.config.js'), mode: 'development' }, 'build');

    //const config_utils_1 = require('@nx/devkit/src/utils/config-utils');
    //delete process['__pw_initiator__'];
    //await (0, config_utils_1.loadConfigFile)(path_1.join(context.workspaceRoot, 'apps/demo-e2e/playwright.config.js'));
    //delete process['__pw_initiator__'];
    console.log('>>>> JEST PATCHED');
    console.log('>>>> CACHED', Object.keys(require.cache).filter(x => !x.includes('node_modules')));
    `
  ).replace(

    `const targetDefaults = (0, project_configuration_utils_1.readTargetDefaultsForTarget)(options.targetName, context.nxJsonConfiguration.targetDefaults, 'nx:run-commands');`,
    `
    const targetDefaults = (0, project_configuration_utils_1.readTargetDefaultsForTarget)(options.targetName, context.nxJsonConfiguration.targetDefaults, 'nx:run-commands');
    console.log('>>>> CACHED', Object.keys(require.cache));
    `,
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
    console.log('>>>> PLAYWRIGHT PATCHED');
    // const playwrightConfig = await (0, config_utils_1.loadConfigFile)((0, path_1.join)(context.workspaceRoot, configFilePath));
    // console.log('>>> playwright config', playwrightConfig);
    return {};
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}


file = 'node_modules/@nx/react/babel.js'
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `api.assertVersion(7);`,
    `
    api.assertVersion(7);
    //PATCHED
    console.log('>>> @nx/react/babel');
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}


file = 'node_modules/@babel/preset-env/lib/index.js';
content = fs.readFileSync(file).toString();
if (!content.includes('PATCHED')) {
  const updated = content.replace(
    `const modules = optionsModules === "auto" ? api.caller(supportsStaticESM) ? false : "commonjs" : optionsModules`,
    `
    const modules = optionsModules === "auto" ? api.caller(supportsStaticESM) ? false : "commonjs" : optionsModules
    //PATCHED
    console.trace();
    console.log('>>>>> @babel/preset-env', {modules, optionsModules, esm: api.caller(supportsStaticESM), NODE_ENV: process.env.NODE_ENV });
    `
  );
  fs.writeFileSync(file, updated);
} else {
  console.log('already patched');
}

