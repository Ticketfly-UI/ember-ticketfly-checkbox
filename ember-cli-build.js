/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here

    snippetSearchPaths: ['tests/dummy/app'],

    svgstore: {
      excludeSourceFiles: true, // exclude all processed source files
      files: {
        sourceDirs: [ 'public/icons' ],
        outputFile: '/assets/icons.svg',
        excludeSourceFiles: true // exclude source files only for this master SVG
      }
    },

    // remove fingerprinting so svg icon shows in github-pages. 
    fingerprint: {
      exclude: ['/assets/icons.svg']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
