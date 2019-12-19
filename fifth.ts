// interface can be used to define a type
interface StudentType {
    name: string;
    gender: string;
    roll: number;
    email?: string; // email become optional
}

const st1: StudentType = {
    name: 'mehul',
    gender: 'm',
    roll: 10,
    email: 'mehul@gmail.com'
};

const st2: StudentType = {
    name: 'jane',
    gender: 'f',
    roll: 11,
    // address: 'mumbai', // will not work
};


interface AbcCallbackFunctionType {
    (a: number, b: number): boolean;
}

function abc(fn: AbcCallbackFunctionType): void {
    const a: number = 1;
    const b: number = 3;

    if (fn(a, b)) {
        console.log('true!!');
    } else {
        console.log('false!!');
    }
}

// abc(5);
abc(function (x: number, y: number): boolean {
    return x > y;
});