var gulp = require("gulp");

gulp.task("deploy", gulp.series(["test", "dev", "release"]));

require("./test");
require("./dev");
require("./release");
