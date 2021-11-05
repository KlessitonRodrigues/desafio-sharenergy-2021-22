"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PowerPlantModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var dayProduction = {
    date: { type: Date, "default": Date.now },
    production: {
        time: { type: Number, required: true },
        tension: { type: Number, required: true },
        AC: { type: Number, required: true },
        kW: { type: Number, required: true },
        temperature: { type: Number, required: true }
    }
};
var powerPlantSchema = new mongoose_1["default"].Schema({
    name: { type: String, required: true },
    diaryProduction: [dayProduction]
});
exports.PowerPlantModel = mongoose_1["default"].model('POWERPLANTS', powerPlantSchema);
exports["default"] = exports.PowerPlantModel;
