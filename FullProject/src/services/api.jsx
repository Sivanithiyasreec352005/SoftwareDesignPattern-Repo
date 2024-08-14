// import axios from 'axios';

// const baseURL = 'http://localhost:8080/api/v1/auth';

// const axiosInstance = axios.create({
//     baseURL,
// });
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// const SignUp = async (name, email, password, role) => {
//     try {
//         const response = await axiosInstance.post('/register', { name, email, password, role });
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             return {
//                 status: error.response.status,
//                 message: error.response.data.message || 'An error occurred'
//             };}
//         if (error.request) {
//             return {
//                 status: 0,
//                 message: 'No response received from the server'
//             };
//         }
//         return {
//             status: 0,
//             message: error.message || 'An unexpected error occurred'
//         };
//     }
//     const SignUp = (name, email, phone, address, password) => axios.post(`${baseURL}/auth/register`, { name, email, phone, address, password });
// };

// export { SignUp, axiosInstance };


import axios from 'axios';

// const baseURL = 'http://65.1.244.186:7777/api';
const baseURL = 'http://localhost:8080/api/v1';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email,password,role) => axios.post(`${baseURL}/auth/register`, { name, email,password,role});

export { axiosInstance, SignUp,}