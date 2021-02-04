import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://pokeapi.co/api/v2",
  });
  
  export const createApiRequest = async (
    url: string,
  ) => {
    try {
      const response = await axios({
        url,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };