namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React'
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact !== null) {
                return `Avalilable Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}