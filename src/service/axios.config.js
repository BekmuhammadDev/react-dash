import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});

export const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});

