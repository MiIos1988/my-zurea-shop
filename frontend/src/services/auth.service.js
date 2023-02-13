import axios from "axios";

export const loginUser = (data) => axios.push("/login", data);
