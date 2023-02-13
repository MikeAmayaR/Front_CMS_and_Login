import axios from "axios";

const login = async (dataEmail) => {
  const baseUrl = process.env.REACT_APP_GET_URL_MAIL;
  try {
    const peticion = await axios({
      url: `${baseUrl}/${dataEmail}`,
      method: "GET",
    });
    return peticion;
  } catch (error) {
    console.log("error", error);
  }
};

export { login };
