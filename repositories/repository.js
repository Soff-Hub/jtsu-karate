import Axios from "axios";

export const baseUrl = "http://192.168.1.24/api/v1";
export const token =
  "GA6dhZGTVU48OZDwWIdAskqXdINb5Z2hpfR3FWxkydvKu1QeVF19GCvtu2PvGIU9";

const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
    Authorization: token,
    'Accept-Language': 'uz'
  },
});

export default client;
