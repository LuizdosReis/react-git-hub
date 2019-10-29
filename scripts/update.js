const { spawn } = require('child_process');
const pkg = require('../package.json');

const dependencies = Object.keys(pkg.dependencies);
const devDepencies = Object.keys(pkg.devDependencies);

const add = (args) => spawn('yarn', ['add'].concat(args), { stdio: 'inherit' });
const addDev = (args) => add(['--dev'].concat(args));

add(dependencies).on('close', () => {
  addDev(devDepencies.concat('react-hot-loader@next')).on('close', (code) => process.exit(code));
});
