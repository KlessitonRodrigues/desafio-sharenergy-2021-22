"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var ClientSchema = new mongoose_1["default"].Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    powerPlants: [
        {
            _id: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'POWERPLANT' },
            participation: { type: String, required: true }
        }
    ]
});
var ClientModel = mongoose_1["default"].model('CLIENT', ClientSchema);
exports["default"] = ClientModel;
