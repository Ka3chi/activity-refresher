import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
        // let valid = false;

        // for (let index = 0; index < this.students.length; index++) {
        //     const element = this.students[index];

        //     if (element.studentId === id) {
        //         valid = true;
        //     }
        // }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }

    updateCourse(id: string, courseName: string) {
            let student = this.students.find(element => element.studentId === id);
            if (student) {
                  student.course = courseName;
                  return student;
              }
              return "student does not exist"
          }

    updateCollege(id: string, collegeName: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
              student.college = collegeName;
              return student;
          }
          return "student does not exist"
    }

    updateAddress(id: string, Address: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
              student.address = Address;
              return student;
          }
          return "student does not exist"
    }

    // create method and return number of students
    numberOfStudent() {
        return this.students.length
    }
    // delete one student and return list of students, use splice method (index, 1)
    deleteStudent(index:number, item:number){
        
        if(item == 1) {
            this.students.splice (index, item)
            return "Student Deleted"
        }
        return "One data remove"
    }
}