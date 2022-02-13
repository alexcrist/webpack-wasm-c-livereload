import chokidar from 'chokidar';
import liveServer from 'live-server';
import wasm from './wasm.mjs';
import webpack from './webpack.mjs';

const options = { ignoreInitial: true };

const makeCallback = (callback) => (event, path) => {
  console.log(`Watcher detected "${event}" @ ${path}`);
  callback();
};

const start = () => {
  
  // Watch for WASM recompiling
  const wasmWatcher = chokidar.watch(['Makefile', 'src/wasm'], options);
  wasmWatcher.on('all', makeCallback(wasm.compile));

  // Watch for webpack rebundling
  const webpackWatcher = chokidar.watch(['src/js'], options);
  webpackWatcher.on('all', makeCallback(webpack.bundle));

  // Watch for browser reloading
  liveServer.start({
    open: true,
    port: 8080,
    root: 'public',
    file: 'index.html',
  });

  console.log('Watching for changes...\n');
};

export default { start };
