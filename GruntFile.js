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
                src: "dist"
            }
        },
        usemin: {  // ALTERA OS HTML PRA APONTAR PROS ARQUIVOS MINIFICADOS
            html: "dist/public/index.html",
            html: "dist/app/views/*.ejs"
        },
        useminPrepare: { // ALTERA OS IMPORTS DO HTML PRO ARQUIVO MINIFICADO E LÊ OS METADADOS (INDICA ONDE PROCURAR PROS MÓDULOS)
            options: {
                root: "dist/public",
                dest: "dist/public"
            },
            html: ["./dist/public/*.html", "./dist/app/views/*.ejs"]
        },
        ngAnnotate: {
            scripts: {
                expand: true,
                src: ["dist/public/js/**/*.js"]
            }
        }
    });
    
    grunt.registerTask("default", ["dist", "minify"]);
    grunt.registerTask("dist", ["clean", "copy"]);
    grunt.registerTask("minify", ["useminPrepare", "ngAnnotate", "concat", "uglify", "cssmin", "usemin"]);
    
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-ng-annotate");
}