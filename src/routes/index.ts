import { Router } from "express";
import { EstoquePaesController } from "../controller/EstoquePaesController";
import { ModalidadePaesController } from "../controller/ModalidadePaesController";

const router = Router();
const estoquePaesController = new EstoquePaesController();
const modalidadePaesController = new ModalidadePaesController();

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
router.get('/modalidade', (res, req) => modalidadePaesController.searchModality(res, req));
router.get('/modalidade/:id', (res, req) => modalidadePaesController.searchModality(res, req));
router.put('/modalidade/:id', (res, req) => modalidadePaesController.updateModality(res, req));
router.delete('/modalidade/:id', (res, req) => modalidadePaesController.deleteModality(res, req));


export default router;
