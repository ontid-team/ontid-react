const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@context': path.resolve(__dirname, 'src/context/index.ts'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      '@layouts': path.resolve(__dirname, 'src/layouts/index.ts'),
      '@lib': path.resolve(__dirname, 'src/lib/index.ts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@ui': path.resolve(__dirname, 'src/ui/index.ts'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
      '@utils/helpers': path.resolve(__dirname, 'src/utils/helpers/index.ts'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
  };
  return config;
};
