import axios from 'axios';

const URL = 'http://127.0.0.1:8000/api/v1';
const getProducts = async () => {
  return await axios.get(`${URL}/products`)
    .then(res =>  res.data)
    .catch(e => console.error(e))
}
export default {
  getProducts
}
