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
    async findOrderByAmount(year) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29;
        }
        else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            status: "Thành công"
        });
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            status: "Thành công"
        });
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            status: "Thành công"
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            status: "Thành công"
        });
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            status: "Thành công"
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            status: "Thành công"
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            status: "Thành công"
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            status: "Thành công"
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            status: "Thành công"
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            status: "Thành công"
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            status: "Thành công"
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            status: "Thành công"
        });
        resp.push([
            {
                label: 'Tháng 1',
                amount: monthJanurary.length
            },
            {
                label: 'Tháng 2',
                amount: monthFeburary.length
            },
            {
                label: 'Tháng 3',
                amount: monthMatch.length
            },
            {
                label: 'Tháng 4',
                amount: monthApril.length
            },
            {
                label: 'Tháng 5',
                amount: monthMay.length
            },
            {
                label: 'Tháng 6',
                amount: monthJune.length
            },
            {
                label: 'Tháng 7',
                amount: monthJuly.length
            },
            {
                label: 'Tháng 8',
                amount: monthAugust.length
            },
            {
                label: 'Tháng 9',
                amount: monthSeptember.length
            },
            {
                label: 'Tháng 10',
                amount: monthOctober.length
            },
            {
                label: 'Tháng 11',
                amount: monthNovember.length
            },
            {
                label: 'Tháng 12',
                amount: monthDecember.length
            },
        ]);
        return resp;
    }
    async findOrderByRevenue(year) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29;
        }
        else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        resp.push([
            {
                label: 'Tháng 1',
                revenue: monthJanurary
            },
            {
                label: 'Tháng 2',
                revenue: monthFeburary
            },
            {
                label: 'Tháng 3',
                revenue: monthMatch
            },
            {
                label: 'Tháng 4',
                revenue: monthApril
            },
            {
                label: 'Tháng 5',
                revenue: monthMay
            },
            {
                label: 'Tháng 6',
                revenue: monthJune
            },
            {
                label: 'Tháng 7',
                revenue: monthJuly
            },
            {
                label: 'Tháng 8',
                revenue: monthAugust
            },
            {
                label: 'Tháng 9',
                revenue: monthSeptember
            },
            {
                label: 'Tháng 10',
                revenue: monthOctober
            },
            {
                label: 'Tháng 11',
                revenue: monthNovember
            },
            {
                label: 'Tháng 12',
                revenue: monthDecember
            },
        ]);
        return resp;
    }
    async findOrderByAmountByUser(year, userId) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29;
        }
        else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            createdBy: userId,
            status: "Thành công"
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            createdBy: userId,
            status: "Thành công"
        });
        resp.push([
            {
                label: 'Tháng 1',
                amount: monthJanurary.length
            },
            {
                label: 'Tháng 2',
                amount: monthFeburary.length
            },
            {
                label: 'Tháng 3',
                amount: monthMatch.length
            },
            {
                label: 'Tháng 4',
                amount: monthApril.length
            },
            {
                label: 'Tháng 5',
                amount: monthMay.length
            },
            {
                label: 'Tháng 6',
                amount: monthJune.length
            },
            {
                label: 'Tháng 7',
                amount: monthJuly.length
            },
            {
                label: 'Tháng 8',
                amount: monthAugust.length
            },
            {
                label: 'Tháng 9',
                amount: monthSeptember.length
            },
            {
                label: 'Tháng 10',
                amount: monthOctober.length
            },
            {
                label: 'Tháng 11',
                amount: monthNovember.length
            },
            {
                label: 'Tháng 12',
                amount: monthDecember.length
            },
        ]);
        return resp;
    }
    async findOrderByRevenueByUser(year, userId) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29;
        }
        else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            createdBy: userId,
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.priceNotIncludeService.valueOf());
            return total;
        });
        resp.push([
            {
                label: 'Tháng 1',
                revenue: monthJanurary
            },
            {
                label: 'Tháng 2',
                revenue: monthFeburary
            },
            {
                label: 'Tháng 3',
                revenue: monthMatch
            },
            {
                label: 'Tháng 4',
                revenue: monthApril
            },
            {
                label: 'Tháng 5',
                revenue: monthMay
            },
            {
                label: 'Tháng 6',
                revenue: monthJune
            },
            {
                label: 'Tháng 7',
                revenue: monthJuly
            },
            {
                label: 'Tháng 8',
                revenue: monthAugust
            },
            {
                label: 'Tháng 9',
                revenue: monthSeptember
            },
            {
                label: 'Tháng 10',
                revenue: monthOctober
            },
            {
                label: 'Tháng 11',
                revenue: monthNovember
            },
            {
                label: 'Tháng 12',
                revenue: monthDecember
            },
        ]);
        return resp;
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