"use strict";
exports.__esModule = true;
exports.createCourse = void 0;
var CreateCourseService_1 = require("./CreateCourseService");
function createCourse(request, response) {
    CreateCourseService_1["default"].execute("NodeJs", 10, "Dani");
    return response.send();
}
exports.createCourse = createCourse;
