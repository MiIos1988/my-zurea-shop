import axios from "axios";

export const getAllProducts = () => axios.get("/product/get-all");
