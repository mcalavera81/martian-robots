"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var fs_1 = require("fs");
var writeFileP = util_1.promisify(fs_1.writeFile);
function writeOutput(file, output) {
    return writeFileP(file, stringify(output), "utf-8");
}
exports.writeOutput = writeOutput;
function stringify(output) {
    return output.robots.map(function (robot) {
        return robot.print();
    }).join("\n");
}
