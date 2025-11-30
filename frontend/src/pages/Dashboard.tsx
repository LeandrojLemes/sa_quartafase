// import { useEffect, useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import api from "../config/axios";
// import "./Dashboard.css";

// export const Dashboard = () => {
//   const { user, logout } = useAuth();

//   const [produtos, setProdutos] = useState<any[]>([]);
//   const [pedidos, setPedidos] = useState<any[]>([]);

//   // Campos do novo produto
//   const [modelo, setModelo] = useState("");
//   const [cor, setCor] = useState("");
//   const [ ano, setAno] = useState("");
//   const [motor, setMotor] = useState("");
//   const [cambio, setCambio] = useState("");
//   const [preco, setPreco] = useState("");
//   const [bloco, setBloco] = useState("");
//   const [estoque, setEstoque] = useState("");

//   // Carregar produtos e pedidos
//   const loadData = async () => {
//     try {
//       const prod = await api.get("/produtos");
//       setProdutos(prod.data);

//       const ped = await api.get("/pedidos");
//       setPedidos(ped.data);
//     } catch (error) {
//       console.error("Erro ao carregar dados:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();

//     // Atualiza automaticamente a cada 3s
//     const interval = setInterval(() => {
//       loadData();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Criar produto BMW GS
//   const criarProduto = async () => {
//     try {
//       await api.post("/produtos", {
//         marca: "BMW",
//         modelo,
//         cor,
//         ano: Number(ano),
//         motor,
//         cambio,
//         preco: Number(preco),
//         bloco,
//         estoque: Number(estoque),
//         status: "Novo",
//       });

//       // Resetar campos
//       setModelo("");
//       setCor("");
//       setAno("");
//       setMotor("");
//       setCambio("");
//       setPreco("");
//       setBloco("");
//       setEstoque("");

//       loadData();
//     } catch (error) {
//       console.error("Erro ao criar produto:", error);
//     }
//   };

//   // Enviar pedido ao simulador
//   const enviarPedido = async (idProduto: number, valor: number) => {
//     try {
//       await api.post("/pedidos", {
//         valor,
//         produtos: [idProduto],
//         status: "Aguardando Produção",
//       });

//       loadData();
//     } catch (error) {
//       console.error("Erro ao enviar pedido:", error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-wrapper">

//         <h1 className="dashboard-title">
//           Bem-vindo, {user?.name || user?.email}!
//         </h1>

//         {/* CRIAR PRODUTO */}
//         <div className="card">
//           <h2>Criar Moto BMW GS</h2>

//           <div className="form-row">
//             <select value={modelo} onChange={(e) => setModelo(e.target.value)}>
//               <option value="">Modelo</option>
//               <option>F 750 GS</option>
//               <option>F 850 GS</option>
//               <option>R 1200 GS</option>
//               <option>R 1250 GS</option>
//               <option>R 1300 GS</option>
//             </select>

//             <select value={cor} onChange={(e) => setCor(e.target.value)}>
//               <option value="">Cor</option>
//               <option>Preto</option>
//               <option>Branco</option>
//               <option>Azul Motorsport</option>
//               <option>Cinza</option>
//               <option>Vermelho</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <select value={ano} onChange={(e) => setAno(e.target.value)}>
//               <option value="">Ano</option>
//               <option>2020</option>
//               <option>2021</option>
//               <option>2022</option>
//               <option>2023</option>
//               <option>2024</option>
//             </select>

//             <select value={motor} onChange={(e) => setMotor(e.target.value)}>
//               <option value="">Motor</option>
//               <option>750cc</option>
//               <option>850cc</option>
//               <option>1200cc</option>
//               <option>1250cc</option>
//               <option>1300cc</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <select value={cambio} onChange={(e) => setCambio(e.target.value)}>
//               <option value="">Câmbio</option>
//               <option>Manual 6 marchas</option>
//             </select>

//             <input
//               placeholder="Preço"
//               value={preco}
//               onChange={(e) => setPreco(e.target.value)}
//             />
//           </div>

//           <div className="form-row">
//             <select value={bloco} onChange={(e) => setBloco(e.target.value)}>
//               <option value="">Bloco de Montagem</option>
//               <option>Montagem A</option>
//               <option>Montagem B</option>
//               <option>Montagem C</option>
//             </select>

//             <input
//               placeholder="Estoque"
//               value={estoque}
//               onChange={(e) => setEstoque(e.target.value)}
//             />
//           </div>

//           <button className="btn-primary" onClick={criarProduto}>
//             Criar Produto
//           </button>
//         </div>

//         {/* LISTA DE PRODUTOS */}
//         <div className="card">
//           <h2>Produtos BMW</h2>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Modelo</th>
//                 <th>Cor</th>
//                 <th>Ano</th>
//                 <th>Preço</th>
//                 <th>Ação</th>
//               </tr>
//             </thead>

//             <tbody>
//               {produtos.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.modelo}</td>
//                   <td>{p.cor}</td>
//                   <td>{p.ano}</td>
//                   <td>R$ {p.preco}</td>
//                   <td>
//                     <button
//                       className="action-btn"
//                       onClick={() => enviarPedido(p.id, p.preco)}
//                     >
//                       Enviar para Produção
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* LISTA DE PEDIDOS */}
//         <div className="card">
//           <h2>Pedidos</h2>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Produto</th>
//                 <th>Valor</th>
//                 <th>Status</th>
//                 <th>Atualizado</th>
//               </tr>
//             </thead>

//             <tbody>
//               {pedidos.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.produtosEmPedidos[0]?.produto?.modelo || "—"}</td>
//                   <td>R$ {p.valor}</td>
//                   <td>{p.status}</td>
//                   <td>{new Date(p.updatedAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <button className="btn-danger" onClick={logout}>
//           Sair
//         </button>

//       </div>
//     </div>
//   );
// };






































































































































































// // import { useState } from 'react';
// // import { useAuth } from '../hooks/useAuth';
// // import { useNavigate } from 'react-router-dom';
// // import './Dashboard.css';

// // export const Dashboard = () => {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);

// //   const handleLogout = async () => {
// //     setLoading(true);
// //     try {
// //       await logout();
// //       navigate('/login');
// //     } catch (error) {
// //       console.error('Erro ao fazer logout:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-card">
// //         <div className="dashboard-header">
// //           <h1>Dashboard</h1>
// //           <button 
// //             onClick={handleLogout} 
// //             disabled={loading}
// //             className="logout-button"
// //           >
// //             {loading ? 'Saindo...' : 'Sair'}
// //           </button>
// //         </div>

// //         <div className="dashboard-content">
// //           <div className="welcome-section">
// //             <h2>Bem-vindo, {user?.name || user?.email}!</h2>
// //             <p>Você está autenticado e esta é uma rota protegida.</p>
// //           </div>

// //           <div className="user-info">
// //             <h3>Informações do Usuário</h3>
// //             <div className="info-item">
// //               <strong>ID:</strong> {user?.id}
// //             </div>
// //             <div className="info-item">
// //               <strong>Email:</strong> {user?.email}
// //             </div>
// //             <div className="info-item">
// //               <strong>Nome:</strong> {user?.name || 'Não informado'}
// //             </div>
// //           </div>

// //           <div className="token-info">
// //             <h3>Tokens JWT</h3>
// //             <p>
// //               O access token é enviado automaticamente em todas as requisições
// //               através do header Authorization.
// //             </p>
// //             <p>
// //               Quando o access token expira, o axios interceptor tenta renovar
// //               automaticamente usando o refresh token.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// import { useEffect, useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import api from "../config/axios";
// import "./Dashboard.css";

// export const Dashboard = () => {
//   const { user, logout } = useAuth();

//   const [produtos, setProdutos] = useState<any[]>([]);
//   const [pedidos, setPedidos] = useState<any[]>([]);

//   // Campos do novo produto
//   const [modelo, setModelo] = useState("");
//   const [cor, setCor] = useState("");
//   const [ano, setAno] = useState("");
//   const [motor, setMotor] = useState("");
//   const [cambio, setCambio] = useState("");
//   const [preco, setPreco] = useState("");
//   const [bloco, setBloco] = useState("");
//   const [estoque, setEstoque] = useState("");

//   // Carregar produtos e pedidos
//   const loadData = async () => {
//     try {
//       const prod = await api.get("/produtos");
//       setProdutos(prod.data);

//       const ped = await api.get("/pedidos");
//       setPedidos(ped.data);
//     } catch (error) {
//       console.error("Erro ao carregar dados:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   // Criar produto BMW GS
//   const criarProduto = async () => {
//     try {
//       await api.post("/produtos", {
//         marca: "BMW",
//         modelo,
//         cor,
//         ano: Number(ano),
//         motor,
//         cambio,
//         preco: Number(preco),
//         bloco,
//         estoque: Number(estoque),
//         status: "Novo",
//       });

//       // Resetar campos
//       setModelo("");
//       setCor("");
//       setAno("");
//       setMotor("");
//       setCambio("");
//       setPreco("");
//       setBloco("");
//       setEstoque("");

//       loadData();
//     } catch (error) {
//       console.error("Erro ao criar produto:", error);
//     }
//   };

//   // Enviar pedido ao simulador
//   const enviarPedido = async (idProduto: number, valor: number) => {
//     try {
//       await api.post("/pedidos", {
//         valor,
//         produtos: [idProduto],
//         status: "Aguardando Produção",
//       });

//       loadData();
//     } catch (error) {
//       console.error("Erro ao enviar pedido:", error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-wrapper">

//         <h1 className="dashboard-title">
//           Bem-vindo, {user?.name || user?.email}!
//         </h1>

//         {/* CRIAR PRODUTO */}
//         <div className="card">
//           <h2>Criar Moto BMW GS</h2>

//           <div className="form-row">
//             <select value={modelo} onChange={(e) => setModelo(e.target.value)}>
//               <option value="">Modelo</option>
//               <option>F 750 GS</option>
//               <option>F 850 GS</option>
//               <option>R 1200 GS</option>
//               <option>R 1250 GS</option>
//               <option>R 1300 GS</option>
//             </select>

//             <select value={cor} onChange={(e) => setCor(e.target.value)}>
//               <option value="">Cor</option>
//               <option>Preto</option>
//               <option>Branco</option>
//               <option>Azul Motorsport</option>
//               <option>Cinza</option>
//               <option>Vermelho</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <select value={ano} onChange={(e) => setAno(e.target.value)}>
//               <option value="">Ano</option>
//               <option>2020</option>
//               <option>2021</option>
//               <option>2022</option>
//               <option>2023</option>
//               <option>2024</option>
//             </select>

//             <select value={motor} onChange={(e) => setMotor(e.target.value)}>
//               <option value="">Motor</option>
//               <option>750cc</option>
//               <option>850cc</option>
//               <option>1200cc</option>
//               <option>1250cc</option>
//               <option>1300cc</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <select value={cambio} onChange={(e) => setCambio(e.target.value)}>
//               <option value="">Câmbio</option>
//               <option>Manual 6 marchas</option>
//             </select>

//             <input
//               placeholder="Preço"
//               value={preco}
//               onChange={(e) => setPreco(e.target.value)}
//             />
//           </div>

//           <div className="form-row">
//             <select value={bloco} onChange={(e) => setBloco(e.target.value)}>
//               <option value="">Bloco de Montagem</option>
//               <option>Montagem A</option>
//               <option>Montagem B</option>
//               <option>Montagem C</option>
//             </select>

//             <input
//               placeholder="Estoque"
//               value={estoque}
//               onChange={(e) => setEstoque(e.target.value)}
//             />
//           </div>

//           <button className="btn-primary" onClick={criarProduto}>
//             Criar Produto
//           </button>
//         </div>

//         {/* LISTA DE PRODUTOS */}
//         <div className="card">
//           <h2>Produtos BMW</h2>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Modelo</th>
//                 <th>Cor</th>
//                 <th>Ano</th>
//                 <th>Preço</th>
//                 <th>Ação</th>
//               </tr>
//             </thead>

//             <tbody>
//               {produtos.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.modelo}</td>
//                   <td>{p.cor}</td>
//                   <td>{p.ano}</td>
//                   <td>R$ {p.preco}</td>
//                   <td>
//                     <button
//                       className="action-btn"
//                       onClick={() => enviarPedido(p.id, p.preco)}
//                     >
//                       Enviar para Produção
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* LISTA DE PEDIDOS */}
//         <div className="card">
//           <h2>Pedidos</h2>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Produto</th>
//                 <th>Valor</th>
//                 <th>Status</th>
//                 <th>Atualizado</th>
//               </tr>
//             </thead>

//             <tbody>
//               {pedidos.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.id}</td>
//                   <td>{p.produto?.modelo || "—"}</td>
//                   <td>R$ {p.valor}</td>
//                   <td>{p.status}</td>
//                   <td>{new Date(p.updatedAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <button className="btn-danger" onClick={logout}>
//           Sair
//         </button>

//       </div>
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import api from "../config/axios";
import "./Dashboard.css";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  const [produtos, setProdutos] = useState<any[]>([]);
  const [pedidos, setPedidos] = useState<any[]>([]);

  // Produto sendo editado (null = criando)
  const [editando, setEditando] = useState<any | null>(null);

  // Campos do formulário
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [ano, setAno] = useState("");
  const [motor, setMotor] = useState("");
  const [cambio, setCambio] = useState("");
  const [preco, setPreco] = useState("");
  const [bloco, setBloco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [status, setStatus] = useState("Novo");

  const limparFormulario = () => {
    setModelo("");
    setCor("");
    setAno("");
    setMotor("");
    setCambio("");
    setPreco("");
    setBloco("");
    setEstoque("");
    setStatus("Novo");
    setEditando(null);
  };

  // Carregar produtos e pedidos
  const loadData = async () => {
    try {
      const prod = await api.get("/produtos");
      setProdutos(prod.data);

      const ped = await api.get("/pedidos");
      setPedidos(ped.data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(() => loadData(), 3000);
    return () => clearInterval(interval);
  }, []);

  // Criar novo produto
  const criarProduto = async () => {
    try {
      await api.post("/produtos", {
        marca: "BMW",
        modelo,
        cor,
        ano: Number(ano),
        motor,
        cambio,
        preco: Number(preco),
        bloco,
        estoque: Number(estoque),
        status,
      });

      limparFormulario();
      loadData();
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  // Enviar pedido ao simulador
  const enviarPedido = async (idProduto: number, valor: number) => {
    try {
      await api.post("/pedidos", {
        valor,
        produtos: [idProduto],
        status: "Aguardando Produção",
      });
      loadData();
    } catch (error) {
      console.error("Erro ao enviar pedido:", error);
    }
  };

  // Abrir edição – preenche o formulário
  const editarProduto = (p: any) => {
    setEditando(p);
    setModelo(p.modelo);
    setCor(p.cor);
    setAno(p.ano);
    setMotor(p.motor);
    setCambio(p.cambio);
    setPreco(p.preco);
    setBloco(p.bloco);
    setEstoque(p.estoque);
    setStatus(p.status);
  };

  // Salvar edição
  const salvarEdicao = async () => {
    try {
      await api.put(`/produtos/${editando.id}`, {
        modelo,
        cor,
        ano: Number(ano),
        motor,
        cambio,
        preco: Number(preco),
        bloco,
        estoque: Number(estoque),
        status,
      });

      limparFormulario();
      loadData();
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  // Excluir
  const excluirProduto = async (id: number) => {
    if (!confirm("Deseja realmente excluir este produto?")) return;

    try {
      await api.delete(`/produtos/${id}`);
      loadData();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">

        <h1 className="dashboard-title">Bem-vindo, {user?.name || user?.email}!</h1>

        {/* FORMULÁRIO DE PRODUTO */}
        <div className="card">
          <h2>{editando ? "Editar Produto" : "Criar Moto BMW GS"}</h2>

          <div className="form-row">
            <select value={modelo} onChange={(e) => setModelo(e.target.value)}>
              <option value="">Modelo</option>
              <option>F 750 GS</option>
              <option>F 850 GS</option>
              <option>R 1200 GS</option>
              <option>R 1250 GS</option>
              <option>R 1300 GS</option>
            </select>

            <select value={cor} onChange={(e) => setCor(e.target.value)}>
              <option value="">Cor</option>
              <option>Preto</option>
              <option>Branco</option>
              <option>Azul Motorsport</option>
              <option>Cinza</option>
              <option>Vermelho</option>
            </select>
          </div>

          <div className="form-row">
            <select value={ano} onChange={(e) => setAno(e.target.value)}>
              <option value="">Ano</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>

            <select value={motor} onChange={(e) => setMotor(e.target.value)}>
              <option value="">Motor</option>
              <option>750cc</option>
              <option>850cc</option>
              <option>1200cc</option>
              <option>1250cc</option>
              <option>1300cc</option>
            </select>
          </div>

          <div className="form-row">
            <select value={cambio} onChange={(e) => setCambio(e.target.value)}>
              <option value="">Câmbio</option>
              <option>Manual 6 marchas</option>
            </select>

            <input
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div className="form-row">
            <select value={bloco} onChange={(e) => setBloco(e.target.value)}>
              <option value="">Bloco de Montagem</option>
              <option>Montagem A</option>
              <option>Montagem B</option>
              <option>Montagem C</option>
            </select>

            <input
              placeholder="Estoque"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
            />
          </div>

          <div className="form-row">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Novo</option>
              <option>Usado</option>
              <option>Indisponível</option>
            </select>
          </div>

          {editando ? (
            <>
              <button className="btn-primary" onClick={salvarEdicao}>
                Salvar Alterações
              </button>
              <button className="btn-danger" onClick={limparFormulario}>
                Cancelar
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={criarProduto}>
              Criar Produto
            </button>
          )}
        </div>

        {/* LISTA DE PRODUTOS */}
        <div className="card">
          <h2>Produtos BMW</h2>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Cor</th>
                <th>Ano</th>
                <th>Preço</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {produtos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.modelo}</td>
                  <td>{p.cor}</td>
                  <td>{p.ano}</td>
                  <td>R$ {p.preco}</td>
                 <td>
  <button className="btn-action btn-enviar" onClick={() => enviarPedido(p.id, p.preco)}>
    Enviar
  </button>

  <button className="btn-action btn-editar" onClick={() => editarProduto(p)}>
    Editar
  </button>

  <button className="btn-action btn-excluir" onClick={() => excluirProduto(p.id)}>
    Excluir
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PEDIDOS */}
        <div className="card">
          <h2>Pedidos</h2>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Atualizado</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.produtosEmPedidos[0]?.produto?.modelo || "—"}</td>
                  <td>R$ {p.valor}</td>
                  <td>{p.status}</td>
                  <td>{new Date(p.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn-danger" onClick={logout}>
          Sair
        </button>
      </div>
    </div>
  );
};
