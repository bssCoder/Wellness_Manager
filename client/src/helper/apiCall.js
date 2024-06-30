import axios from "axios";

axios.defaults.baseURL = "https://wellness-manager.onrender.com/api";

const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export default fetchData;
