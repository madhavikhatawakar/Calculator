/*module.exports=function(grunt){
grunt.initConfig({ 
clean:{
  	 build:{
	 src:["test\*.js","src\*.js"]
 		}
},

uglify:
{
my_target:{
files:{
  'dest/output.min.js': ['test/*.js', 'src/*.js']
}
}
},

jshint:
{

all:
  ['Gruntfile.js','test/*.js', 'src/*.js']

},
  
 mocha: {
    all: {
      src: 'test/*.js',
      options: {
        globals: ['assert'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '*-test',
        ui: 'bdd',
  
      }
    }
  }
});


grunt.loadNpmTasks('grunt-contrib-clean');

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-mocha');
grunt.registerTask('default',['clean','uglify','jshint']);
};


*/
