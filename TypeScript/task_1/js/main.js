var teacher3 = {
    firstName: 'Snake',
    fullTimeEmployee: false,
    lastName: 'Plissken',
    location: 'New York',
    contract: false,
};
var director1 = {
    firstName: 'David',
    lastName: 'Hayter',
    location: 'Los Angeles',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.substring(0, 1), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    ;
    StudentClass.prototype.displatName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var s = new StudentClass("Agent", "Revolver");
console.log(s.workOnHomework());
console.log(s.displatName());
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
console.log(director1);
console.log(teacher3);