"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], Appointment.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column()
    ], Appointment.prototype, "provider", void 0);
    __decorate([
        typeorm_1.Column('timestamp with time zone')
    ], Appointment.prototype, "date", void 0);
    Appointment = __decorate([
        typeorm_1.Entity('appointments')
    ], Appointment);
    return Appointment;
}());
exports.default = Appointment;
