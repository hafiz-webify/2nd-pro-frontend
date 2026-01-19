import axios from "axios";

const ADMIN_API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ❌ NO TOKEN ATTACHED HERE
export default ADMIN_API;
