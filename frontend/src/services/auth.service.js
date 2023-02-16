import axios from "axios";

export const loginUser = (data) => axios.post("/auth/login", data);

export const saveData = (data) =>
  localStorage.setItem("ZU", JSON.stringify(data));
