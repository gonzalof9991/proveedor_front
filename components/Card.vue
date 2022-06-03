<template>
  <div class="card__p">
    <div class="card__header">
      <img :src="data.image_url" alt="img" class="w-25">
    </div>
    <div class="card__body">
      <p class="body__p">{{data.name}}</p>
      <p class="body__p--price">{{showPrice}}</p>
    </div>
    <div class="card__footer">
      <div class="footer__button--amount">
        <div class="button__remove"  @click="(count !== 0) ? count-- : null">-</div>
        <div class="flex-grow-1 text-center p-3">{{showCount}}</div>
        <div class="button__add"  @click="(count !== 8) ? count++ : null">+</div>
      </div>
      <div class="footer__button--add" @click="sendProduct(1)">
        <p class="m-0 mr-2">Agregar</p> <b-icon icon="cart-plus" font-scale="1"></b-icon>
      </div>
      <div class="footer__button" @click="sendProduct(2)">
        <p class="m-0 mr-2">Ver Detalle</p> <b-icon icon="tag" font-scale="1"></b-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['data'],
  data(){
    return {
      count: 1
    }
  },
  computed:{
    showPrice(){
      let price = new Intl.NumberFormat().format(this.data.price)
      return `$${price}`;
    },
    showCount(){
      return this.count;
    }
  },
  methods:{
    sendProduct(v){
      let obj = {
        ...this.data,
        type: v,
        count: this.count
      }
      this.$emit('sendProduct',obj);
    }
  }
}
</script>
<style lang="scss" scoped>
.footer__button--amount{
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  .button__remove{
    padding: 1px;
    background: #fe6563;
    border-bottom: 5px solid #c34c4b;
    flex-grow: 1;
    display: flex;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    height: max-content;
  }
  .button__add{
    padding: 1px;
    background: #ff908f;
    border-bottom: 5px solid #d37675;
    flex-grow: 1;
    display: flex;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    height: max-content;
  }
}
.card__p{
  width: 360px;
  height: 420px;
  display: flex;
  margin: 0 20px;
  margin-bottom: 20px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0/15%) !important;
  transition: all .5s ease;
}
.card__p:hover{
  position: relative;
  top: -10px;
}
.card__header{
  flex-grow: .4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__body{
  flex-grow: .4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}
.body__p{
  font-size: .8rem;
  font-weight: bold;
  color: #00458F;
}
.body__p--price{
  font-size: 1rem;
  font-weight: bold;
  color: #2da009;
}
.card__footer{
  flex-grow: .2;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
}
.footer__button--add{
  width: 100%;
  flex-grow: 1;
  background: linear-gradient(90deg, rgba(254,101,99,1) 18%, rgba(255,121,119,1) 56%, rgba(255,144,143,1) 78%);
  color: #fff;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  transition: all .4s ease;
}
.footer__button--add:hover{
  cursor: pointer;
}
.footer__button{
  width: 100%;
  flex-grow: 1;
  background: #00458F;
  padding: 5px 0;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  transition: all .4s ease;
}
.footer__button:hover{
  cursor: pointer;
  background: #00356e;
  color: #fff;
}
</style>
