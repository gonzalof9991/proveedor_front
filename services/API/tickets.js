import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1';
//const URL = 'http://127.0.0.1:8000/api/v1';

const get = async () => {
  return await axios.get(`${URL}/tickets`)
    .then(res =>  res.data)
    .catch(e => console.error(e))
}

const post = async (price,arrayId) => {
  let data = {
    name: 'Proovedor',
    send_to : "Stock",
    total_price: price
  }
  return await axios.post(`${URL}/tickets`,data)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export default {
  get,
  post
}
