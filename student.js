import { Person } from "./person.js";
class Student extends Person {
    courses;
    constructor(name, id) {
        super(name, id);
        this.courses = [];
    }
}
