import Axios from "axios";

export const baseUrl = process.env.BASE_URL;
export const token =
  "GA6dhZGTVU48OZDwWIdAskqXdINb5Z2hpfR3FWxkydvKu1QeVF19GCvtu2PvGIU9";

const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
    Authorization: token,
  },
});

export default client;
