#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const generate = configName => {
  if (fs.existsSync(configName)) {
    console.warn(
      chalk`{cyan.bold ${configName}} {yellow already exists, skipping}`
    );
    return;
  }

  const template = fs.readFileSync(
    path.resolve(__dirname, '../templates', configName)
  );

  fs.writeFileSync(configName, template);
  console.log(chalk`{cyan.bold ${configName}} written`);
};

console.log(
  chalk`bootstrapping {green @covertcj/es-config} into {magenta ${__dirname}}\n`
);

generate('.eslintrc.js');
generate('.prettierrc.js');

console.log(chalk`\n{green bootstrap complete}`);
