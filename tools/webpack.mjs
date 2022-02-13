import path from 'path';
import url from 'url';
import webpack from 'webpack';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let bundler;

const init = (isProd) => {
  const webpackConfig = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, '../public/build'),
      filename: 'bundle.js'
    },
    mode: isProd ? 'production' : 'development'
  };
  bundler = webpack(webpackConfig);
};

const bundle = () => {
  console.log('Webpack: bundling...');
  bundler.run();
  console.log('Webpack: bundled.\n')
}

export default { init, bundle };