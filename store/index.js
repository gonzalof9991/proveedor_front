let array = [1,2,3,4,5]
export const state = () => ({
  counter: 0
})

export const getter = {
  getCounter(state){
    return state.counter;
  }
}
export const mutations = {
  increment(state){
    state.counter++;
  },
  reduce(state){
    state.counter--;
  }

}

export const actions = {
  async fetchCounter(state){
    const res = {data:10};
    state.counter = res.data;
    return res.data;
  }
}
