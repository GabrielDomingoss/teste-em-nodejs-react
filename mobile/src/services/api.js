import axios from 'axios';
// colocar o ip em baseURL 
const api = axios.create({
    baseURL:''
});

export default api;