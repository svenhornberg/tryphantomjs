// Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {                   // task
			target: ['hello.js']     // array of files
		}
	});

	grunt.loadNpmTasks('grunt-eslint');
	grunt.registerTask('default', ['eslint']);
};