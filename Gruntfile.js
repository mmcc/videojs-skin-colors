module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/videojs-theme-colors.css': 'src/videojs-theme-colors.scss',       // 'destination': 'source'
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserify']);

};
