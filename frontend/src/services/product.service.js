import axios from "axios";

export const GetProductAll = () => axios.get("/product/get-all");