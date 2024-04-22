import Axios from "axios";

export const baseUrl = "http://66.29.152.178/api/v1";


const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
  },
});

export default client;
