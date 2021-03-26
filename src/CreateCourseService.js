"use strict";
exports.__esModule = true;
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (name, duration, educator) {
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
exports["default"] = new CreateCourseService();
