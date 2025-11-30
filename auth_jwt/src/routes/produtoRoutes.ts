// import { Router } from "express";
// import { createProduto, deleteProduto, listProdutoById, listProdutos, updateProduto } from "../controllers/produtoController.ts";


// const produtosRouter = Router();

// produtosRouter.post("/produtos", createProduto);
// produtosRouter.get("/produtos", listProdutos);

// produtosRouter.get("/produtos/:id", listProdutoById);

// produtosRouter.put("/produtos/:id", updateProduto);

// produtosRouter.delete("/produtos/:id", deleteProduto);

// export default produtosRouter;

import { Router } from "express";
import {
  createProduto,
  deleteProduto,
  listProdutoById,
  listProdutos,
  updateProduto
} from "../controllers/produtoController.ts";

const produtosRouter = Router();

// Como no app.ts usamos app.use("/produtos", produtosRouter)
// aqui as rotas devem começar com "/"

produtosRouter.post("/", createProduto);
produtosRouter.get("/", listProdutos);
produtosRouter.get("/:id", listProdutoById);
produtosRouter.put("/:id", updateProduto);
produtosRouter.delete("/:id", deleteProduto);

export default produtosRouter;

