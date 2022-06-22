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
        <div class="button__remove"  @click="(count !== 1) ? count-- : null">-</div>
        <div class="amount">
          <span class="amount__title">Cantidad</span>
          {{showCount}}
        </div>
        <div class="button__add"  @click="(count !== 8) ? count++ : null">+</div>
      </div>
      <div class="footer__button--add" @click="sendProduct(1)">
        <p class="m-0 mr-2">Agregar</p> <lord-icon
        src="https://cdn.lordicon.com/cgwdruiv.json"
        trigger="loop"
        colors="primary:#f76b5b,secondary:#f76b5b"
        stroke="80"
        style="width:32px;height:32px">
      </lord-icon>
      </div>
      <div class="footer__button" @click="sendProduct(2)">
        <p class="m-0 mr-2">Ver Detalle</p> <lord-icon
        src="https://cdn.lordicon.com/riwgnrrz.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#ffffff"
        style="width:32px;height:32px">
      </lord-icon>
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

