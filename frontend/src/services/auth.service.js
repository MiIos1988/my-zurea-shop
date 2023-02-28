import axios from "axios";

export const loginUser = (data) => axios.post("/auth/login", data);

export const saveData = (data) =>
  localStorage.setItem("ZU", JSON.stringify(data));

export const isUserLogIn = () => localStorage.getItem("ZU");

export const isAdminUser = () => isUserLogIn() && JSON.parse(isUserLogIn())?.isAdmin;