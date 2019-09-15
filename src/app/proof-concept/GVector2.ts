export class GVector2 {
    private locX = 0;
    private locY = 0;

    public get x(): number {
        return this.locX;
    }

    public get y(): number {
        return this.locY;
    }

    public static of(x?: number | { x: number, y: number }, y?: number) {
        const result = new GVector2();
        if (typeof x === "object") {
            result.locX = x.x;
            result.locY = x.y;

            return result;
        }

        if (typeof y === "number") {
            result.locX = x;
            result.locY = y;

            return result;
        }

        if (typeof x === "number") {
            result.locY = result.locX = x;
        }

        return result;
    }
}
