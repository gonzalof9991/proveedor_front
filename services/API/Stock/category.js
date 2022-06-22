import axios from "axios";

const URL = 'https://proveedor-api.herokuapp.com/api/v1/stock';
//const URL = 'http://127.0.0.1:8000/api/v1/stock';

const post = async (category) => {
  let body = {
    name: category.name,
    slug: `cat-${category.name}`,
    icon: "<i class='fas fa-mobile-alt'></i>",
    image: "https://claudiorigollet.cl/categories/default.jpg"
  }
  return axios.post(`${URL}/Category`,body)
    .then(res => res.data)
}

export default {
  post
}
