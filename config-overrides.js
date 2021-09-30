const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@context': path.resolve(__dirname, 'src/context/index.ts'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@layouts': path.resolve(__dirname, 'src/layouts/index.ts'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
  };
  return config;
};
