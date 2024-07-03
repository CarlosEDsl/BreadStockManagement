"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraysUtils = void 0;
class ArraysUtils {
    static arrayEquals(ar1, ar2) {
        if (ar1.length !== ar2.length)
            return false;
        for (let i = 0; i < ar2.length; i++) {
            if (ar1[i] !== ar2[i])
                return false;
        }
        return true;
    }
}
exports.ArraysUtils = ArraysUtils;
