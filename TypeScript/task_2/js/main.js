;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffe a break";
    };
    Director.prototype.workDirectorTask = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTask());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return "Teaching Math";
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
}
var d1 = new Director();
var t1 = new Teacher();
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(teachClass('Math'));
console.log(teachClass('History'));
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));