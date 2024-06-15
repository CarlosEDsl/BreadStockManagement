export class IdGenerator {
    private static ids: { [key: string]: number } = {};

    public static getNextID(className: string): number {
        if (!this.ids[className]) {
            this.ids[className] = 0;
        }
        this.ids[className] += 1;
        return this.ids[className];
    }
}
