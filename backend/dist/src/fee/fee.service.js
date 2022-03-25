"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fee_schemas_1 = require("./schemas/fee.schemas");
let FeeService = class FeeService {
    constructor(feeModel) {
        this.feeModel = feeModel;
    }
    async find() {
        return this.feeModel.find();
    }
    async create(title, price) {
        let fee = new this.feeModel({ title, price });
        return fee.save();
    }
    async edit(id, price) {
        let fee = await this.feeModel.findById(id.toString());
        fee.price = price;
        return fee.save();
    }
    async delete(id) {
        let fee = await this.feeModel.findById(id.toString());
        return fee.remove();
    }
};
FeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(fee_schemas_1.Fee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FeeService);
exports.FeeService = FeeService;
//# sourceMappingURL=fee.service.js.map