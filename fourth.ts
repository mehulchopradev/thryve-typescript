abstract class CollegeUser {
    name: string = '';
    protected gender: string = 'NA';
    private static count: number = 0; // shared by all the objects of CollegeUser (Student, Professor)
    // access a static variable using the class name

    constructor(name: string, gender: string) {
        // this can be any subclass object of college user
        this.name = name;
        this.gender = gender;

        CollegeUser.count += 1;
    }

    // Access static method using the class name
    static getCount(): number {
        return CollegeUser.count;
    }

    getDetails(): string {
        return `Name: ${this.name}\nGender: ${this.gender}`;
    }

    abstract giveAttendance(): void;
}

class Student extends CollegeUser {
    private roll: number = 0; // private

    constructor(name: string = '', roll: number = 0, gender: string = 'NA') {
        super(name, gender);
        this.roll = roll;
    }

    // method overriding
    getDetails(): string { // public
        return `Name: ${this.name}\nRoll: ${this.roll}\nGender: ${this.gender}`;
    }

    getNameRoll(): [string, number] {
        // tuple data type
        return [this.name, this.roll];
    }

    giveAttendance(): void {
        console.log('Attendance given by scanner');
    }
}

class Professor extends CollegeUser {
    subjects: string[];

    constructor(name: string, gender: string, subjects: string[]) {
        super(name, gender);
        this.subjects = subjects;
    }

    giveAttendance(): void {
        console.log('Attendance given by barcode');
    }
}

console.log(CollegeUser.getCount());
const s10: Student = new Student('mehul', 10, 'm');
const s11: Student = new Student('jane', 11, 'f');

console.log(CollegeUser.getCount());

const p1: Professor = new Professor('jill', 'f', ['Physics']);


// console.log(CollegeUser.count);
console.log(CollegeUser.getCount());
// ???

// console.log(s10.gender); // will not work as gender is protected

// const cu1: CollegeUser = new CollegeUser('mehul', 'm');
// will not work as CollegeUser is abstract