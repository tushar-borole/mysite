module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
				' * helper.css v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' * Licensed under <%= pkg.license %>\n' +
				' */',

		less: {
			dist: {
				options: {
					cleancss: false
				},
				files: {
					"dist/helper.css": "less/helper.less"
				}
			},
			min: {
				options: {
					cleancss: true
				},
				files: {
					'dist/helper.min.css': 'dist/helper.css'
				}
			}
		},
		usebanner: {
			dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>'
				},
				files: {
					src: [
						'dist/*.css'
					]
				}
			}
		},

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: [],
				commit: false,
				commitMessage: 'helper v%VERSION%',
				commitFiles: ['-a'], // '-a' for all files
				createTag: false,
				tagName: 'v%VERSION%',
				// tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: 'upstream',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('default', ['less', 'usebanner']);
};