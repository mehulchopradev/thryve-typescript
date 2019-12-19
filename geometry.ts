interface Shape {
    area(): number;
    perimeter(): number;
}

export class Square implements Shape {

    constructor(private side: number) {}

    area(): number {
        return this.side * this.side;
    }
    
    perimeter(): number {
        return 4 * this.side;
    }
}


export class Rectangle implements Shape {
    constructor(private length: number, private breadth: number) {}

    area(): number {
        return this.length * this.breadth;
    }
    
    perimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}