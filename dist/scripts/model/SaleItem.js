"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleItem = void 0;
class SaleItem {
    constructor(breadStockID, amount) {
        this.breadStockID = breadStockID;
        this.amount = amount;
    }
    getBreadStockID() {
        return this.breadStockID;
    }
    getAmount() {
        return this.amount;
    }
}
exports.SaleItem = SaleItem;
