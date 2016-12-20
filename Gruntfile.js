module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

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
          ext: '.min.js'
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
          ext: '.min.css'
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
    responsive_images: {
      run: {
        options: {
          sizes: [{
            name: 'small',
            width: 60,
          },{
            name: 'large',
            width: 640,
          },{
            name: "xl",
            width: 1024,
          }]
        },
        files: {
          'dist/img/pizzeria.jpg': 'dist/img/pizzeria.jpg'
        }
      }
    },
    clean: ['dist/img/pizzeria.jpg'],
    watch: {
      run: {
        files: ['*.html', 'js/*.js', 'css/*.css', 'views/*.html','views/css/*.css', 'views/js/*.js'],
        tasks: ['onChange'],
      },
      options: {
        livereload: true,
        spawn: false,
      },
    },
  });

  // Default task(s).
  grunt.registerTask('onChange', ['newer:uglify', 
    'newer:cssmin', 'newer:htmlmin', 'imagemin', 'responsive_images', 'clean']);
  grunt.registerTask('default', ['watch']);
};