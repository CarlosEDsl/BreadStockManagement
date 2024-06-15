import { Router } from "express";
import { EstoquePaesController } from "../controller/EstoquePaesController";
import { ModalidadePaesController } from "../controller/ModalidadePaesController";
import { SaleController } from "../controller/SaleController";
const router = Router();
const estoquePaesController = new EstoquePaesController();
const modalidadePaesController = new ModalidadePaesController();
const sellController = new SaleController();

//Rotas do estoque

router.post('/estoque', (req, res) => estoquePaesController.cadastrarEstoque(req, res));
router.get('/estoques', (req, res) => estoquePaesController.todosEstoque(res));
//Rota de busca por id
router.get(`/estoque/:id`, (req, res) => estoquePaesController.buscarEstoque(req, res));
//Rota de busca por modalidade
router.get(`/estoque`, (req, res) => estoquePaesController.buscarEstoque(req, res));
router.put(`/estoque/:id`, (req, res) => estoquePaesController.atualizarEstoque(req, res));
router.delete(`/estoque/:id`, (req, res) => estoquePaesController.removerEstoque(req, res));

//Rotas das Modalidades
router.post('/modalidade', (req, res) => modalidadePaesController.createModality(req, res));
router.get('/modalidade/todas', (req, res) => modalidadePaesController.getAllModalities(res));
router.get('/modalidade', (req, res) => modalidadePaesController.searchModality(req, res));
router.get('/modalidade/:id', (req, res) => modalidadePaesController.searchModality(req, res));
router.put('/modalidade/:id', (req, res) => modalidadePaesController.updateModality(req, res));
router.delete('/modalidade/:id', (req, res) => modalidadePaesController.deleteModality(req, res));

router.post('/venda', (req, res) => sellController.createSale(req, res));
router.get('/venda:id', (req, res) => sellController.findSale(req, res));
router.get('/venda', (req, res) => sellController.findSale(req, res));


export default router;
