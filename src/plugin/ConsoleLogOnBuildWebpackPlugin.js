function ConsoleLogOnBuildWebpackPlugin() {

};

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin('run', function (compiler, callback) {
        console.log("The webpack build process is starting!!!");

        callback();
    });
}