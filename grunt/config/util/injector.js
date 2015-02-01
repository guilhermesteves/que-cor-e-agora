// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    },
    // Inject application script files into index.html (doesn't include bower)
    jade: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/templates/', '../');
          return 'include ' + filePath;
        },
        starttag: '//- [injector:jade]',
        endtag: '//- [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/templates/layouts/base.jade': [
          '<%= yeogurt.client %>/templates/modules/*.jade',
        ]
      }
    },
    // Inject application script files into index.html (doesn't include bower)
    scripts: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');
          return '<script src="/' + filePath + '"></script>';
        },
        starttag: '// [injector:js]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/templates/layouts/base.jade': [
          '<%= yeogurt.client %>/scripts/**/*.js',
          '!<%= yeogurt.client %>/scripts/main.js'
        ]
      }
    },
    // Inject component less into main.less
    less: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/styles/', '');
          return '@import \'' + filePath + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/styles/main.less': [
          '<%= yeogurt.client %>/styles/**/*.less',
          '!<%= yeogurt.client %>/styles/main.less'
        ]
      }
    },
  });

};

module.exports = taskConfig;
