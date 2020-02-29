export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getXCoordinate(): number {
        return this.x;
    }

    getYCoordinate(): number {
        return this.y;
    }
}