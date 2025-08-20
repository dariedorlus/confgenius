import axios from "axios";
import { apiConfig } from "./api-config";

export const axiosClient = axios.create({ baseURL: apiConfig.baseUrl });
