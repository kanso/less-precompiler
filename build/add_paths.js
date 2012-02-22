var path = require('path');


/**
 * Queue up paths and compile targets for use by the postprocessor
 */

module.exports = function (root, _path, settings, doc, callback) {
    if (!doc._less_paths) {
        // use an object to make merging easier
        doc._less_paths = {};
    }
    if (!doc._less_compile) {
        // use an object to make merging easier
        doc._less_compile = {};
    }
    if (!settings.less) {
        return callback(null, doc);
    }
    if (settings.less.paths) {
        settings.less.paths.forEach(function (p) {
            doc._less_paths[path.resolve(_path, p)] = null;
        });
    }
    if (settings.less.compile) {
        var compile = settings.less.compile;
        if (!Array.isArray(compile)) {
            compile = [compile];
        }
        compile.forEach(function (c) {
            doc._less_compile[path.resolve(_path, c)] = {
                compress: settings.less.compress
            };
        });
    }
    callback(null, doc);
};
