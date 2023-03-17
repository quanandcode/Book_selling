import axios from "axios";
const uploadCloudinary = (fileUpload) => {
  const API_URL = "http://localhost:4000";
  return axios
    .post(API_URL + "/admin/create/book/cover", fileUpload)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default uploadCloudinary;
