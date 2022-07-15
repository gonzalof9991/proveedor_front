import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1';
//const URL = 'http://127.0.0.1:8000/api/v1';

const get = async () => {
  return await axios.get(`${URL}/users`)
    .then(res =>  res.data)
    .catch(e => console.error(e))
}

const store = async (data) => {
  let body = {
    'name': data.name,
    'password': data.password,
    'email': data.email,
    'type_of_user_id' : data.type_of_user_id
  };
  return await axios.post(`${URL}/users`,body)
    .then(res => res.data)
    .catch(e => console.error(e))
}

const update = async (id,data) => {
  console.log(data);
  let body = {
    'name': data.name,
    'password': data.password,
    'email': data.email,
    'type_of_user_id' : data.type_of_user_id
  };
  console.log(body,'body');
  return await axios.patch(`${URL}/users/${id}`,body)
    .then(res => res.data)
    .catch(e => console.error(e))
}

const destroy = async (id) => {

  return await axios.delete(`${URL}/users/${id}`)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export default {
  get,
  store,
  update,
  destroy
}
