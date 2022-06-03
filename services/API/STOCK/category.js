import axios from "axios";

const config = {
  'Ocp-Apim-Subscription-Key' : '7d1ef2177b0c43feb04fcbc90b70d8f5'
}
const URL = 'https://apiseguridad.azure-api.net/proveedor';

const createCategory = async (category) => {
  let body = {
    name: category.name,
    slug: `cat-${category.name}`,
    icon: "<i class='fas fa-mobile-alt'></i>",
    image: "https://claudiorigollet.cl/categories/default.jpg"
  }
  return axios.post(`${URL}/Category`,body,config)
    .then(res => res.data)
}
