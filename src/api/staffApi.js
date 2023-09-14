import axios from '../config/axios';

export const updateStaff = (input) => axios.patch('/staffs', input);
