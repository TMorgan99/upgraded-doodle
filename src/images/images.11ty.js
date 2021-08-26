// image minification
const
  dest = './dist/images',             // need to read this from the setting in .eleventy.js
  fsp = require('fs').promises

  // SyntaxError: Cannot use import statement outside a module
// import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';     // was: imagemin-mozjpeg
// import imageminPngquant from 'imagemin-pngquant';

// missing: svg handler.



module.exports = class {

  data() {

    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    };

  }

  // process all files
  async render() {
    console.log('render');

    // do nothing if destination already exists?
    try {
      let dir = await fsp.stat(dest);
      if (dir.isDirectory()) return true;
    }
    catch (e) { }

    // process images
    console.log('optimizing images');

    // was:
    // await imagemin(['src/images/*', '!src/images/*.js'], {
    //   destination: dest,
    //   plugins
    // });

// until I can run import in node.
    // // now: with version 8, and modules.
    // const files = await imagemin(['images/*.{jpg,png}'], {
    //   destination: dest,
    //   plugins: [
    //     imageminJpegtran(),
    //     imageminPngquant({
    //       quality: [0.6, 0.8]
    //     })
    //   ]
    // });

    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]

    return true;

  }
};
