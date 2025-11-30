import { Router } from "express";
import {
  updateStatus,
} from "../controllers/pedidosController.ts";

const publicPedidosRouter = Router();

// rota pública que o simulador usa para atualizar o status do pedido
publicPedidosRouter.patch("/pedidos/:id", updateStatus);

export default publicPedidosRouter;
