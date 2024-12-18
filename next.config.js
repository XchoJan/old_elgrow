const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'pages')],
  },
  webpack(config, { isServer }) {
    // Удаляем существующую обработку SVG, чтобы не было конфликта
    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Добавляем обработчик SVG с помощью @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
