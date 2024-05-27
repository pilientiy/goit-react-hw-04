import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPicturesWithTopic = async (value, page) => {
  const response = await axios.get(
    `search/photos?page=${page}&query=${value}&client_id=DcWznAG55_-DefiHU7KIlsyubpkYu6MUPr081Xlzzd8`
  );
console.log(response);
  return response.data;
};


