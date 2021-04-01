module.exports = grunt => {


    grunt.initConfig({
        copy: {
            project: {
                expand: true,
                cwd: '.',
                src: ['**', "!GruntFile.js", "!package.json", "!bower.json"],
                dest: "dist"
            }
        },
        clean: {
            dist: {
                src: "dist",
            }
        }
    });
    
    grunt.registerTask("default", ["dist"]);
    grunt.registerTask("dist", ["clean", "copy"]);
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
}