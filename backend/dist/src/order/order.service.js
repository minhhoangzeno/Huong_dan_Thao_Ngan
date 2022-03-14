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
const order_item_schemas_1 = require("../order-item/schemas/order-item.schemas");
const order_schemas_1 = require("./schemas/order.schemas");
let OrderService = class OrderService {
    constructor(orderModel, orderItemModel) {
        this.orderModel = orderModel;
        this.orderItemModel = orderItemModel;
    }
    async findAll() {
        return this.orderModel.find();
    }
    async findById(id) {
        let order = await this.orderModel.findById(id);
        let orderItems = await this.orderItemModel.find({ '_id': { $in: [order.orders] } }).populate("product", "title price", "Product");
        return { order, orders: orderItems };
    }
    async create(orderDto, orders, user) {
        var orderSave = new this.orderModel(Object.assign(Object.assign({}, orderDto), { user }));
        orders.forEach(order => {
            let orderItem = new this.orderItemModel({ product: order.product, amount: order.amount });
            orderSave.orders.push(orderItem._id);
            orderItem.save();
        });
        return orderSave.save();
    }
    async update(id, orderDto) {
        let order = await this.orderModel.findById(id.toString());
        order.fullName = orderDto.fullName;
        order.phoneNumber = orderDto.phoneNumber;
        order.email = orderDto.email;
        order.address = orderDto.address;
        order.note = orderDto.note;
        order.price = orderDto.price;
        order.status = orderDto.status;
        return order.save();
    }
    async delete(id) {
        let order = await this.orderModel.findById(id.toString());
        return order.remove();
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schemas_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_item_schemas_1.OrderItem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map