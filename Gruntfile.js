module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        preserveComments: false,
      },
      run: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '',
          src: ['js/*.js', 'views/js/*.js'],
          dest: 'dist/js',
        }],
      },
    },
    cssmin: {
      options: {
        keepSpecialComments: false,
      },
      run: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '',
          src: ['css/*.css', 'views/css/*.css'],
          dest: 'dist/css',
        }],
      },
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
      run: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '',
          src: ['*.html', 'views/*.html'],
          dest: 'dist/',
        }],
      },
    },
    imagemin: {
      run: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '',
          src: ['img/*.{png,jpg,gif}','views/img/*.{png,jpg,gif}'],
          dest: 'dist/img',
        }],
      },
    },
    watch: {
      run: {
        files: ['*.html', '**/*.{js,css}', 'views/**/*.{js,css}', 'views/*.html'],
        tasks: ['onChange'],
      },
      options: {
        livereload: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('onChange', ['newer:uglify', 
    'newer:cssmin', 'newer:htmlmin', 'newer:imagemin']);
  grunt.registerTask('default', ['watch'])
};