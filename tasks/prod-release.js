var gulp = require("gulp");

gulp.task("deploy", gulp.series(["test", "dev", "release"]));

require("./test.js");
require("./dev.js");
require("./release.js");
