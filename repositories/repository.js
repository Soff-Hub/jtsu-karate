import Axios from "axios";

export const baseUrl = "https://jtsu.pythonanywhere.com/api/v1";
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
