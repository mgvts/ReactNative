module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/env',
      'babel-preset-expo',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'inline-react-svg'
  ]
};