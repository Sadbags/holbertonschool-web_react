namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingJava !== null) {
                return `Available Teacher: ${this.teacher.experienceTeachingJava}`;
            } else {
                return "No available teacher";
            }
        }
    }
}