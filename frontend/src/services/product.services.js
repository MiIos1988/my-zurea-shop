import axios from "axios";

export const getAllProducts = (search) => axios.get(`/product/get-all${search ? '?search=' + search : ''}`);

