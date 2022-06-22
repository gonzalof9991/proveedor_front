import products from "@/services/API/products";

export const state = () => ({
  ticket_id: 0
})

export const getter = {
  getProduct(state){
    return state.ticket_id;
  }
}
export const mutations = {
  load(state,v){
    state.ticket_id = v;
  },

}

