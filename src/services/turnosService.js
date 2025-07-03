import axios from 'axios';
const API_URL = 'https://6861b32096f0cc4e34b743f2.mockapi.io/api/v1/turnos';

export const getTurnos = () => axios.get(API_URL)
export const createTurno = (data) => axios.post(API_URL, data);
export const updateTurno = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTurno = (id) => axios.delete(`${API_URL}/${id}`);