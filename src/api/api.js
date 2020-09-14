import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reqres.in/api/',
});

// api.interceptors.request.use((config) => {
//     const user = localStorage.getItem('user');

//     if (!user) {
//         return config;
//     }

//     const token = JSON.parse(user).token;

//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response.status === 401) {
//             localStorage.removeItem('user');
//             window.location = '/';
//             return Promise.reject();
//         }
//     }
// );

export default api;
