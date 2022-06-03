import axios from 'axios';

const config = {
  'Ocp-Apim-Subscription-Key' : '7d1ef2177b0c43feb04fcbc90b70d8f5'
};

const URL = 'https://apiseguridad.azure-api.net/proveedor';

const index = async () => {
  return await axios.get(`${URL}/products`,config)
    .then(res => res.data)
}

const store = async (product) => {
  let body = {
    id: product.id,
    name: product.name,
    slug: `p-${product.name}`,
    description: product.description,
    price: product.price,
    quantity: product.count,
    subcategory_id: 4
  }
  return await axios.post(`${URL}/products`,body,config)
    .then(res => res.data)
    .catch(err => err)
}






export default {
  index,
  store
}
