import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1';
//const URL = 'http://127.0.0.1:8000/api/v1';

const get = async () => {
  return await axios.get(`${URL}/categories`)
    .then(res =>  res.data)
    .catch(e => console.error(e))
}

const store = async (data) => {
  let body = {
    'name': data.name
  };
  return await axios.post(`${URL}/categories`,body)
    .then(res => res.data)
    .catch(e => console.error(e))
}

const update = async (id,data) => {
  console.log(data);
  let body = {
    'name': data.name
  };
  console.log(body);
  return await axios.patch(`${URL}/categories/${id}`,body)
    .then(res => res.data)
    .catch(e => console.error(e))
}

const destroy = async (id) => {

  return await axios.delete(`${URL}/categories/${id}`)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export default {
  get,
  store,
  update,
  destroy
}
