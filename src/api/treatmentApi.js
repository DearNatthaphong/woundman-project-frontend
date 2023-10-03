import axios from '../config/axios';

export const getTreatments = () => axios.get('/treatments');

export const getTreatmentById = (id) => axios.get(`/treatments/${id}`);
