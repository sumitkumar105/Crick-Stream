import axios from "axios";
export const getData = (url: string) => axios.get(url);
