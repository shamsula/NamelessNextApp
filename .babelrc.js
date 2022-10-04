module.exports = {
  presets: [
    ["@babel/preset-env", { modules: 'commonjs' }],
    '@babel/preset-react',
    "@babel/preset-typescript",
  ],
    plugins: ['macros'],
  // presets: [
  //     ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
  //     '@babel/preset-react',
  //     [
  //       '@emotion/babel-preset-css-prop',
  //       {
  //         hoist: isProd,
  //         sourceMap: !isProd,
  //         autoLabel: isProd ? 'never' : 'always',
  //         labelFormat: '[filename]--[local]',
  //       },
  //     ],
  //   ],
  //   plugins: ['@babel/plugin-transform-runtime']
};
