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

    getId(): string {
        return `${this.x}${this.y}`;
    }

    getNeighbours(): Coordinate[] {
        return [
            new Coordinate(this.x - 1, this.y - 1),
            new Coordinate(this.x - 1, this.y),
            new Coordinate(this.x - 1, this.y + 1),
            new Coordinate(this.x, this.y - 1),
            new Coordinate(this.x, this.y + 1),
            new Coordinate(this.x + 1, this.y - 1),
            new Coordinate(this.x + 1, this.y),
            new Coordinate(this.x + 1, this.y + 1)
        ];
    }
}