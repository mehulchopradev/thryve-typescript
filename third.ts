const s1: Readonly<{
    name: string; // readonly name: string;
    gender: string; // readonly gender: string;
    roll: number; // readonly roll: number;
}> = {
    name: 'mehul',
    gender: 'm',
    roll: 10
};

// const r: string = s1.roll; // will not work
const r: number = s1.roll;

/* s1.roll = 11;
s1.name = 'mehul chopra';
s1.gender = 'f'; */ // will not work as the object attributes are readonly making the object as
// immutable

/* class Student {
    // by default public access specifier
    name: string = ''; // public
    private roll: number = 0; // private
    gender: string = 'NA';

    constructor(name: string = '', roll: number = 0, gender: string = 'NA') {
        this.name = name;
        this.roll = roll;
        this.gender = gender;
    }

    getDetails(): string { // public
        return `Name: ${this.name}\nRoll: ${this.roll}\nGender: ${this.gender}`;
    }

    getNameRoll(): [string, number] {
        // tuple data type
        return [this.name, this.roll];
    }

}

const s2: Readonly<Student> = new Student('mehul', 10, 'm');
// console.log(s2);
// s2.gender = 'F'; // cannot do since s2 object is immutable

const s3: Student = new Student();
// console.log(s3);

console.log(s2.getDetails());
console.log(s3.getDetails());
console.log(s1.name);
// console.log(s2.roll); // this will not work as roll is private in class Student

const [studentName, roll] = s2.getNameRoll();
console.log(studentName);
console.log(roll); */
