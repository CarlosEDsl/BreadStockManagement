"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EstoquePaesController_1 = require("../controller/EstoquePaesController");
const router = (0, express_1.Router)();
const estoquePaesController = new EstoquePaesController_1.EstoquePaesController();
router.post('/estoques', (req, res) => estoquePaesController.cadastrarEstoque(req, res));
exports.default = router;
