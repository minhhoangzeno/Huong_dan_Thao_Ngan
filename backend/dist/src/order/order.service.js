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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schemas_1 = require("./schemas/order.schemas");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async findAll() {
        return this.orderModel.find();
    }
    async search(textSearch) {
        let regex = new RegExp(textSearch, "i");
        return await this.orderModel.find({ code: regex });
    }
    async findByUser(userId) {
        return this.orderModel.find({ createdBy: userId });
    }
    async createOrder(orderDto, userId) {
        let order = new this.orderModel(Object.assign({}, orderDto));
        order.createdBy = userId;
        return order.save();
    }
    async changeStatus(id, status) {
        let order = await this.orderModel.findById(id.toString());
        order.status = status;
        return order.save();
    }
    async feedback(id, feedback) {
        let order = await this.orderModel.findById(id.toString());
        order.feedback = feedback;
        return order.save();
    }
    async updateOrder(orderDto, orderId) {
        let order = await this.orderModel.findById(orderId);
        order.peopleSend.fullName = orderDto.peopleSend.fullName;
        order.peopleSend.phoneNumber = orderDto.peopleSend.phoneNumber;
        order.peopleSend.city = orderDto.peopleSend.city;
        order.peopleSend.district = orderDto.peopleSend.district;
        order.peopleSend.address = orderDto.peopleSend.address;
        order.peopleRecieve.fullName = orderDto.peopleRecieve.fullName;
        order.peopleRecieve.phoneNumber = orderDto.peopleRecieve.phoneNumber;
        order.peopleRecieve.city = orderDto.peopleRecieve.city;
        order.peopleRecieve.district = orderDto.peopleRecieve.district;
        order.peopleRecieve.address = orderDto.peopleRecieve.address;
        order.code = orderDto.code;
        order.title = orderDto.title;
        order.weight = orderDto.weight;
        order.priceNotIncludeService = orderDto.priceNotIncludeService;
        order.service.priceService = orderDto.service.priceService;
        order.service.serviceName = orderDto.service.serviceName;
        order.ecommerce = orderDto.ecommerce;
        order.amount = orderDto.amount;
        order.totalPrice = orderDto.totalPrice;
        order.note = orderDto.note;
        return order.save();
    }
    async delete(orderId) {
        let order = await this.orderModel.findById(orderId);
        return order.remove();
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schemas_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map