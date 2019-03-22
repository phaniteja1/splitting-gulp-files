"use strict";

var gulp = require("gulp");
var FwdRef = require("undertaker-forward-reference");

gulp.registry(FwdRef(["tasks/*.js"]));

require("./tasks/prod-release.js");
