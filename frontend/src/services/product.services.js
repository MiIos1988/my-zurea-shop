import axios from "axios";

export const getAllProducts = (page, elPerPage) => axios.get(`/product/get-all/${page}/${elPerPage}`);

