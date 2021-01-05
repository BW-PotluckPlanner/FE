import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "https://potluck-planner1220.herokuapp.com/",
  });
};

export default axiosWithAuth;
