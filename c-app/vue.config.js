const px2rem = require('postcss-px2rem');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            // 以设计稿750为例， 750 / 10 = 75
            // 你写的像素除以remUnit
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
