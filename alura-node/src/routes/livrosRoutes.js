import Express from "express";
import LivroController from "../controllers/livrosController.js";

const router = Express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivros)
    .delete("/livros/:id", LivroController.excluirLivro)



export default router;