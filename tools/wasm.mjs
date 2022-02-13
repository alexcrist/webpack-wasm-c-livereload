import childProcess from 'child_process';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let command;

const init = (isProd) => {
  const env = isProd ? 'prod' : 'dev';
  const makeDir = path.resolve(__dirname, '..');
  command = `make ${env} -C ${makeDir}`
};

const compile = () => {
  console.log('WASM: compiling...');
  childProcess.execSync(command);
  console.log('WASM: compiled.\n');
};

export default { init, compile };