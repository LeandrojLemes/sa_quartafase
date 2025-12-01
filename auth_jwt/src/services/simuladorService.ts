
import axios from "axios";

class SimuladorService {
  constructor() {}

  async enviarPedidoParaFila(pedido: any, produtos: any[]) {
    try {
      const pedidoId = pedido.id;
      
      const result = await axios({
        method: "post",
        url: "http://52.72.137.244:3000/queue/items",
        data: {
          payload: {
            orderId: pedidoId,
            order: produtos.map((produto: any) => {
              return { bloco: produto.bloco };
            }),
          },
          callbackUrl: `http://98.93.178.127:3000/pedidos/${pedidoId}`

        },
      });

      return result;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }
}

export const simuladorService = new SimuladorService();






































































// import axios from "axios";

// class SimuladorService {
//   // TO-DO TIPAR PEDIDO
//   constructor() {}
//   async enviarPedidoParaFila(pedido: any, produtos) {
//     try {
//       const pedidoId = pedido.id;
//       const result = await axios({
//         method: "post",
//         url: "http://52.72.137.244:3000/queue/items",
//         data: {
//           payload: {
//             orderId: pedidoId,
//             order: produtos.map((produto) => {
//               return { bloco: produto.bloco };
//             }),
//           },
//           callbackUrl: `http://localhost:3000/pedidos/${pedidoId}`

//         },
//       });

//       return result;
//     } catch (error: any) {
//       console.log(error);
//       throw new Error(error, {});
//     }
//   }
// }

// export const simuladorService = new SimuladorService();