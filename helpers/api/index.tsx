import axios from "axios";

const config = {
  headers: {
      authorization: `Bearer ${process.env.TOKEN_API}`,
      ambiente: `${process.env.API_AMBIENTE}`,
  },
};

const API = axios.create({
  baseURL: process.env.BASE_URL_API,
  ...config
});

export default API;