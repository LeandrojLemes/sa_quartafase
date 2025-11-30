// import axios from 'axios';

// // Base URL da API backend
// const API_BASE_URL = 'http://localhost:3000';

// // Criar instância do axios
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Interceptor para adicionar token nas requisições
// api.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor para tratar respostas e refresh token
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Se o erro for 401 e não tentou refresh ainda
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           // Tentar refresh do token
//           const response = await axios.post(`${API_BASE_URL}/refresh`, {
//             refreshToken,
//           });

//           const { accessToken: newAccessToken } = response.data;

//           // Atualizar token no localStorage
//           localStorage.setItem('accessToken', newAccessToken);

//           // Atualizar header da requisição original
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//           // Retry da requisição original
//           return api(originalRequest);
//         } catch (refreshError) {
//           // Se o refresh falhar, limpar tokens e redirecionar para login
//           localStorage.removeItem('accessToken');
//           localStorage.removeItem('refreshToken');
//           window.location.href = '/login';
//           return Promise.reject(refreshError);
//         }
//       } else {
//         // Se não tiver refresh token, redirecionar para login
//         localStorage.removeItem('accessToken');
//         window.location.href = '/login';
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;



import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar accessToken
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Se der 401 e ainda não tentou dar refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          // Chamar o endpoint correto do backend
          const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });

          // Atualizar accessToken
          localStorage.setItem('accessToken', data.accessToken);

          // Atualizar header
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

          return api(originalRequest);
        } catch (refreshError) {
          // Refresh falhou → limpar tokens
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }

      // Sem refreshToken → voltar para login
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default api;
