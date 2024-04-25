import Axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const client = Axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
    'Accept-Language': 'uz'
  },
});

export default client;