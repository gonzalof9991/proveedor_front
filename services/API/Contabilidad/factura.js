import axios from 'axios';

const URL = 'http://54.243.203.166:8080/api/contabilidad/facturas';
//const URL = 'http://127.0.0.1:8000/api/v1/stock';
const config = {
  'Access-Control-Allow-Origin' : '*',
  'Content-Type' : 'application/json'
}
const index = async () => {
  return await axios.get(`${URL}/all`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

const store = async (factura,products) => {
  let body = {
    "estadoFactura": "Pagada",
    "fechaCreacion": factura.date,
    "montoFactura": factura.totalAmount,
    "productos": products,
    "usuario": factura.user
  }
  return axios.post(`${URL}/factura`,body,config)
    .then(res => res)
    .catch(err => err)
}



export default {
  index,
  store
}
