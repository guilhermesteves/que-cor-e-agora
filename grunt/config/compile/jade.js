// Configuration for jade task(s)
// Compile jade templates into HTML
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jade', {
    server: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: true
        }
      },
      expand: true,
      cwd: '<%= yeogurt.client %>/templates/',
      dest: '<%= yeogurt.tmp %>/',
      src: ['**/*.jade'],
      ext: '.html'
    },
    dist: {
      options: {
        pretty: true,
        client: false,
        data: {
          debug: false
        }
      },
      expand: true,
      cwd: '<%= yeogurt.client %>/templates/',
      dest: '<%= yeogurt.dist %>/',
      src: ['**/*.jade'],
      ext: '.html'
    },
  });

};

module.exports = taskConfig;
