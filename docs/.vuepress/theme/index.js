// Theme API.
module.exports = (options, ctx) => ({
  plugins: [
    ['@vuepress/active-header-links', options.activeHeaderLinks],
    '@vuepress/plugin-nprogress',
  ]
});
