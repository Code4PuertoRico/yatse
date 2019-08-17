const withCSS = require('@zeit/next-css');
const data = require('./static/data.json');

module.exports = withCSS({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let paths = {
      '/': { page: '/' }
    };

    for (let i = 0; i < data.length; i++) {
      let pageNumber = `${i + 1}`;
      paths[`/page/${pageNumber}`] = {
        page: '/page/[pageNumber]',
        query: { pageNumber }
      };
    }

    return paths;
  }
});
