module.exports = {
  plugins: [
    // [
    //   'react-native-reanimated/plugin',
    //   {
    //     relativeSourceLocation: true,
    //   },
    // ],
    [
      'module-resolver',
      {
        alias: {
          src: './src',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
