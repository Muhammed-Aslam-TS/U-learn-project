"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminScheama = new mongoose_1.Schema({
    FullName: String,
    Email: String,
    Phone: Number,
    Password: String
});
const AdminModels = (0, mongoose_1.model)("Admin", AdminScheama);
exports.default = AdminModels;
