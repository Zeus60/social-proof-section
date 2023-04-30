module.exports = {
  module: {
    plugins: [require('autoprefixer'), require('postcss-preset-env')({ stage: 1 })],
  },
};
