module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './', // Adjust the path as needed
            // Add more aliases for other directories as needed
          },
        },
      ],
    ],
  };
};
