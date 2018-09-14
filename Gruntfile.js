module.exports = function(grunt) {

    grunt.initConfig({
      copy: {
        main: {
            files: [{
                src: 'node_modules/d3/dist/d3.min.js',
                dest: 'assets/vendor/d3.min.js'
            },
            {
                src: 'node_modules/scales/dist/scales.js',
                dest: 'assets/vendor/scales.min.js'
            },
            {
                src: 'node_modules/d3-svg-legend/d3-legend.min.js',
                dest: 'assets/vendor/d3-legend.min.js'
            }]
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-copy');
};