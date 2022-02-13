
import liveReload from './liveReload.mjs';
import wasm from './wasm.mjs';
import webpack from './webpack.mjs';

const mode = process.env.MODE;
const isProd = mode === 'PROD';
const isDev = mode === 'DEV';
if (!isProd && !isDev) {
  throw Error(`Invalid mode: ${mode}`);
}

wasm.init(isProd);
webpack.init(isProd);

wasm.compile();
webpack.bundle();

if (isDev) {
  liveReload.start();
}

