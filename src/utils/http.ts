import axios, { AxiosResponse, Method } from 'axios';

// export const isProduction = process.env.NODE_ENV === 'production';

// const backendURL = isProduction
//   ? (import.meta.env.VITE_PRODUCTION_BACKEND_URL as string)
//   : (import.meta.env.VITE_DEVELOPMENT_BACKEND_URL as string);

export const axiosInstance = axios.create({
  // baseURL: backendURL,
  baseURL: 'http://157.15.86.41:8080/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// const withoutAccessTokenRoute = [
//   'user/register',
//   'user/login',
//   'user/refresh-token',
// ];

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     if (withoutAccessTokenRoute.includes(config.url as string)) {
//       return config;
//     }
//     const access_token = localStorage.getItem('token');
//     if (access_token) {
//       const exp = jwtDecode(access_token).exp as number;
//       if (Date.now() > exp * 1000) {
//         try {
//           const newToken = await usersService.callAccessToken();
//           if (newToken.status === 200) {
//             localStorage.setItem('token', newToken.data.data.access_token);
//             axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken.data.data.access_token}`;
//             config.headers.Authorization = `Bearer ${newToken.data.data.access_token}`;
//           }
//         } catch (err) {
//           if (isAxiosError(err)) {
//             if (err.response?.status === 401) {
//               toast.error('Token Expired, Please login again');
//               delete axiosInstance.defaults.headers.common.Authorization;
//               setTimeout(() => {
//                 localStorage.removeItem('token');
//                 window.location.href = '/login';
//               }, 2000);
//             }
//           }
//         }
//       }
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   },
// );

// axiosInstance.interceptors.response.use(
//   (repsonse) => {
//     console.log("after response");
//     return repsonse;
//   },
//   (err) => {
//     const {
//       config,
//       response: { data, status },
//     } = err;
//   },
// );

const http = <T extends object, U = unknown>({
  method = 'get',
  url,
  data,
}: {
  method?: Method;
  url: string;
  data?: U;
}): Promise<AxiosResponse<T>> =>
  axiosInstance<T>({
    method,
    url,
    data,
  });

export default http;
