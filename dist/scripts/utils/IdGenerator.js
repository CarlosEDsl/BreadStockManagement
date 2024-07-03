"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
class IdGenerator {
    static getNextID(className) {
        if (!this.ids[className]) {
            this.ids[className] = 0;
        }
        this.ids[className] += 1;
        return this.ids[className];
    }
}
exports.IdGenerator = IdGenerator;
IdGenerator.ids = {};
