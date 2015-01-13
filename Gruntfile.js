module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src/*'],
        tasks: ['sass', 'browserify'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/videojs-skin-colors.css': 'src/videojs-skin-colors.scss',       // 'destination': 'source'
          'dist/preview.css': 'src/preview.scss'
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/preview.js': ['src/preview.js'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserify']);

};
