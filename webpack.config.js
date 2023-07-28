import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
};

export const webpackConfig = (isMode) => {
  return {
    entry: [ path.join(paths.src, 'js/app.js')],

    mode: isMode ? 'development' : 'production',

    output: {
      path: path.join(paths.build, 'js'),
      filename: 'app.min.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,

          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };
};
