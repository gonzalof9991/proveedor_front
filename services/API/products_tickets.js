import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1';
//const URL = 'http://127.0.0.1:8000/api/v1'

const post = async (ticket_id,arrayId) => {
  let ticketId = ticket_id;
  localStorage.setItem('ticket_id',ticketId);
  arrayId.forEach(item => {
    let data = {
      ticket_id : ticketId,
      product_id : item
    }
    return axios.post(`${URL}/products_tickets`,data)
      .then((res) => {
        return 201;
      })
      .catch(e => console.error(e))
  })
}

export default {
  post
}
