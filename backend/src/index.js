"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/ping', (req, res) => {
    console.log("Hello Stranger :)");
    res.setHeader("Contet-Type", "applicaton/json");
    res.send("ping");
});
app.get('/hola/:nombre/:apellido', (req, res) => {
    const { nombre, apellido } = req.params;
    console.log("Solicitando tus nombre");
    res.setHeader("Contet-Type", "applicaton/json");
    res.send({ nombre, apellido });
});
