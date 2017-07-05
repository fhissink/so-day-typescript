module.exports = function (grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks("grunt-ts");
  var appDir = 'D:/workshops-and-courses/workshops/ts-so-day/waba/arcgis-web-appbuilder-2.4/server/apps/2';
  var stemappDir = 'D:/workshops-and-courses/workshops/ts-so-day/waba/arcgis-web-appbuilder-2.4/client/stemapp';
  grunt.initConfig({
    sync: {
      main: {
        verbose: true,
        files: [{
            cwd: 'dist/',
            src: '**',
            dest: stemappDir
          },
          {
            cwd: 'dist/',
            src: '**',
            dest: appDir
          }
        ]
      }
    },
    babel: {
      'main': {
        'files': [{
          'expand': true,
          'src': [
            'widgets/*.js',
            'widgets/**/*.js',
            'widgets/**/**/*.js',
            'widgets/!**/**/nls/*.js',
            'themes/*.js',
            'themes/**/*.js',
            'themes/**/**/*.js',
            'themes/!**/**/nls/*.js'
          ],
          'dest': 'dist/'
        }]
      }
    },
    watch: {
      main: {
        files: [
          'widgets/**/*.ts',
          'widgets/**/*.html',
          'widgets/**/*.css',
          'widgets/**/*.json',
          'themes/**'
        ],
        tasks: [
          'clean',
          'ts',
          'babel',
          'copy',
          'sync'
        ],
        options: {
          spawn: false,
          atBegin: true
        }
      }
    },
    copy: {
      'main': {
        'src': [
          'widgets/**/**.html',
          'widgets/**/**.json',
          'widgets/**/**.css',
          'widgets/**/images/**',
          'widgets/**/nls/**',
          'themes/**/**.html',
          'themes/**/**.json',
          'themes/**/**.css',
          'themes/**/images/**',
          'themes/**/nls/**'
        ],
        'dest': 'dist/',
        'expand': true
      }
    },
    ts: {
      main: {
        src: ["widgets/**/*.ts", "typings.d.ts", "!node_modules/**"]
      },
      options: {
        additionalFlags: "--noImplicitUseStrict",
        module: "amd",
        target: "es5",
        fast: "never"
      }
    },
    clean: {
      'dist': {
        'src': 'dist/**'
      }
    }
  });
  grunt.registerTask('default', ['watch']);
};
