import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/il_ilce'

export const listILIlce = () => axios.get(REST_API_BASE_URL);

export const createILIlce = (ilIlce) => axios.post(REST_API_BASE_URL,ilIlce);