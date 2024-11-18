const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Include web-specific extensions for React Native Web compatibility
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'web.js', 'web.ts', 'web.tsx',"svg"]
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);



