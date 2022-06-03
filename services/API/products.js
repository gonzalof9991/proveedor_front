import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1';
const getProducts = async () => {
  return await axios.get(`${URL}/products`)
    .then(res =>  res.data)
    .catch(e => console.error(e))
}
export default {
  getProducts
}
