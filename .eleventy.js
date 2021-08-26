//  11ty configuration
const
  dev = global.dev = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = config => {
  /* --- PLUGINS --- */

  // navigation
  config.addPlugin(require('@11ty/eleventy-navigation'));

  /* --- SHORTCODES --- */

  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));

  /* --- FILTERS --- */

  // format dates
  const dateformat = require('./lib/filters/dateformat');
  config.addFilter('datefriendly', dateformat.friendly);
  config.addFilter('dateymd', dateformat.ymd);

  // format word count and reading time
  config.addFilter('readtime', require('./lib/filters/readtime'));


  /* --- COLLECTIONS --- */

  // post collection (in src/articles)
  config.addCollection('post', collection =>

    collection
      .getFilteredByGlob('./src/articles/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))

  );


  /* --- PASSTHROUGHS --- */

  config.addPassthroughCopy('src/images');    // also the 11ty.js file... 

  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'dist'
    }

  };
};
