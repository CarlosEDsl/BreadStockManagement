"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BreadStockController_1 = require("../controller/BreadStockController");
const BreadModalityController_1 = require("../controller/BreadModalityController");
const BreadSaleController_1 = require("../controller/BreadSaleController");
const router = (0, express_1.Router)();
const breadStockController = new BreadStockController_1.BreadStockController();
const breadModalityController = new BreadModalityController_1.BreadModalityController();
const breadSaleController = new BreadSaleController_1.BreadSaleController();
//Rotas do estoque
router.post('/estoque', (req, res) => breadStockController.createStock(req, res));
router.get('/estoques', (req, res) => breadStockController.getAllStocks(res));
//Rota de busca por id
router.get(`/estoque/:id`, (req, res) => breadStockController.findStock(req, res));
//Rota de busca por modalidade
router.get(`/estoque`, (req, res) => breadStockController.findStock(req, res));
router.put(`/estoque/:id`, (req, res) => breadStockController.updateStock(req, res));
router.put(`/estoque`, (req, res) => breadStockController.updateStock(req, res));
router.delete(`/estoque/:id`, (req, res) => breadStockController.removeStock(req, res));
router.delete(`/estoque`, (req, res) => breadStockController.removeStock(req, res));
//Rotas das Modalidades
router.post('/modalidade', (req, res) => breadModalityController.createModality(req, res));
router.get('/modalidade/todas', (req, res) => breadModalityController.getAllModalities(res));
router.get('/modalidade', (req, res) => breadModalityController.searchModality(req, res));
router.get('/modalidade/:id', (req, res) => breadModalityController.searchModality(req, res));
router.put('/modalidade/:id', (req, res) => breadModalityController.updateModality(req, res));
router.put('/modalidade', (req, res) => breadModalityController.updateModality(req, res));
router.delete('/modalidade/:id', (req, res) => breadModalityController.deleteModality(req, res));
router.delete('/modalidade', (req, res) => breadModalityController.deleteModality(req, res));
router.post('/venda', (req, res) => breadSaleController.createSale(req, res));
router.get('/venda/:id', (req, res) => breadSaleController.findSale(req, res));
router.get('/venda', (req, res) => breadSaleController.findSale(req, res));
exports.default = router;
