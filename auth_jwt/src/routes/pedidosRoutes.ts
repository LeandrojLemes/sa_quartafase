// import { Router } from "express";
// import {
//   createPedido,
//   deletePedido,
//   listPedidoById,
//   listPedidos,
//   updatePedido,
//   updateStatus,
// } from "../controllers/pedidosController.ts";
// // 
// const pedidosRouter = Router();

// pedidosRouter.post("/pedidos", createPedido);
// pedidosRouter.get("/pedidos", listPedidos);

// pedidosRouter.get("/pedidos/:id", listPedidoById);

// pedidosRouter.put("/pedidos/:id", updatePedido);

// pedidosRouter.delete("/pedidos/:id", deletePedido);

// pedidosRouter.post("/pedidos/:id", updateStatus);

// export default pedidosRouter;


import { Router } from "express";
import {
  createPedido,
  deletePedido,
  listPedidoById,
  listPedidos,
  updatePedido,
  updateStatus,
} from "../controllers/pedidosController.ts";

const pedidosRouter = Router();

// FRONT — cria e lista pedidos
pedidosRouter.post("/", createPedido);
pedidosRouter.get("/", listPedidos);

// FRONT e SIMULADOR — pegar por ID
pedidosRouter.get("/:id", listPedidoById);

// SIMULADOR — callback para atualizar o status
pedidosRouter.post("/:id", updateStatus);

// FRONT — editar e deletar pedido
pedidosRouter.put("/:id", updatePedido);
pedidosRouter.delete("/:id", deletePedido);

export default pedidosRouter;
