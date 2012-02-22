var path = require('path');


/**
 * Queue up paths and compile targets for use by the postprocessor
 */

module.exports = function (root, _path, settings, doc, callback) {
    if (!doc._less_paths) {
        doc._less_paths = [];
    }
    if (!doc._less_compile) {
        doc._less_compile = [];
    }
    if (!settings.less) {
        return callback(null, doc);
    }
    if (settings.less.paths) {
        doc._less_paths = doc._less_paths.concat(
            settings.less.paths.map(function (p) {
                return path.resolve(_path, p);
            })
        );
    }
    if (settings.less.compile) {
        var compile = settings.less.compile;
        if (!Array.isArray(compile)) {
            compile = [compile];
        }
        doc._less_compile = doc._less_compile.concat(
            compile.map(function (c) {
                return {
                    filename: path.resolve(_path, c),
                    compress: settings.less.compress
                };
            })
        );
    }
    callback(null, doc);
};
