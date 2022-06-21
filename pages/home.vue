<template>
  <div>
    <main class="d-flex justify-content-between">
      <div class="menu__slide">
        <div class="slide__header">
          Logo
        </div>
        <div class="slide__links">
          <div class="links" @click="view = 'Products'">
            <b-icon animation="pulse" font-scale="1.5" class="text-white" icon="house-door"></b-icon> <p class="p__link">Dashboard</p>
          </div>
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="person"></b-icon> <p class="p__link">Perfil</p>
          </div>
          <div class="links" @click="view = 'Tickets'">
            <b-icon font-scale="1.5" class="text-white" icon="clipboard-data"></b-icon> <p class="p__link">Ordenes</p>
          </div>
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="people"></b-icon> <p class="p__link">Usuarios</p>
          </div>
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="card-text"></b-icon> <p class="p__link">Categorias</p>
          </div>

        </div>
        <div class="slide__footer">
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="signpost"></b-icon> <p class="p__link">Salir</p>
          </div>
        </div>
      </div>

      <Template v-if="view === 'Products'">
        <template v-slot:content>
          <div class="mt-5 d-flex justify-content-between align-items-center">
            <h3 class="ml-5 color__proveedor font-weight-bold">Dashboard</h3>
            <div class="user">
              <h5 class="color__red">Gonzalo</h5>
              <h6 class="bagde--prov">Admin</h6>
            </div>
          </div>
          <div class="filter__brand" v-if="brands.length > 1">
            <div class="button__brand" @click="() => {
            if(from !== 0){
              this.from -= 4;
              this.to -= 4;
            }
          }"> <b-icon icon="arrow-left-circle-fill" font-scale="2"></b-icon> </div>
            <div @click="filterBrand(b)" v-for="b in showBrands" :key="b.id"  :class="(selectedBrand === b) ? 'brand__card--active brand' :'brand__card brand'">

              <img v-if="b.length > 0" :src="`/img/brands/${b}.webp`" class="w-75" alt="">

            </div>
            <div v-if="to < brands.length" class="button__brand" @click="from += 4; to += 4;"> <b-icon icon="arrow-right-circle-fill" font-scale="2"></b-icon> </div>
          </div>
          <div class="result">
            <div class="result__texts">
              <div class="texts_div">
                {{showProductsLength}}
              </div>
              <h4 class="color__proveedor m-0">Resultados</h4>
            </div>
            <div>
              <span class="d-none" >Ordenar por</span>
            </div>
          </div>
          <div class="products">
            <div class="product__filters">
              <p class="color__proveedor font-weight-bold m-0">Filtros seleccionados</p>
              <div v-if="filters.length > 0" class="filter">
                <div class="mr-3">
                  {{filters}}
                </div>
                <div @click="removeFilter()" class="filter__x">
                  X
                </div>
              </div>
            </div>
            <div v-if="!showSpinner" class="product__list">
              <Card
                v-for="(p,index) in showProducts"
                :key="index"
                :data="p"
                @sendProduct="listeningSendProduct"
              />

            </div>
            <div v-else class="d-flex justify-content-center align-items-center flex-grow-1">
              <BounceLoader :loading="true" :color="'#00458F'" :size="'120px'"></BounceLoader>
            </div>
          </div>
          <!-- Modal Detalle -->
          <b-modal id="modal__prov" size="lg" hide-footer>
            <div class="modal__body">
              <div class="body__header">
                <b-img class="img-fluid" :src="productSelected.image_url"></b-img>
              </div>
              <div class="body__texts">
                <div class="d-flex justify-content-between align-items-center">
                  <h6 >Nombre: </h6><h6 class="color__proveedor ml-3 flex-grow-1">{{productSelected.name}}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <h6 >Codigo: </h6><h6 class="color__proveedor ml-3  flex-grow-1">{{productSelected.product_code}}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <h6 >Categoria: </h6><h6 class="color__proveedor ml-3  flex-grow-1" v-if="productSelected.category">{{productSelected.category.name}}</h6>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center">
                  <h6 >Descripción: </h6><h6 class="color__proveedor ml-3  flex-grow-1" v-if="productSelected.description">{{productSelected.description.substr(0,700)}}</h6>
                </div>
              </div>
            </div>

          </b-modal>
          <!-- Modal Carrito -->
          <b-modal id="modal__prov--carrito" size="lg" hide-footer>
            <div class="modal__body--carrito">
              <div v-if="carts.length > 0" class="cart__list " v-for="c in carts">
                <b-img class="w-10" :src="c.image_url"></b-img>
                <span class="flex-grow-1 text-center color__proveedor">{{c.name}}</span>
                <span class="mr-3">{{c.count}}</span>
                <b-icon @click="removeCart(c)" icon="dash-circle-fill" font-scale="1.5" class="icon__delete"></b-icon>
              </div>
              <div v-if="carts.length === 0" class="d-flex justify-content-center align-items-center">
                <h6 class="color__proveedor">No hay productos en su carrito.</h6>
              </div>

            </div>
            <div v-if="carts.length > 0" class="modal__footer--carrito">
              <div @click="sendToStock()" class="footer__button--carrito">
                Enviar
              </div>
            </div>


          </b-modal>
        </template>

      </Template>

      <Template v-if="view === 'Tickets'">
        <template v-slot:content>
          <h1>Tickets</h1>
        </template>
      </Template>
    </main>
  </div>

</template>

<script>
import products from "~/services/API/products.js";
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';
import Card from "~/components/Card";
import product from "~/services/API/Stock/product.js";
import Template from "@/components/Template";
export default {
  name: 'IndexPage',
  components: {Template, Card, BounceLoader},
  data(){
    return{
      products: [],
      productsSet: [],
      showSuccess: false,
      brands: [],
      carts: [],
      filters: [],
      showFilter: false,
      showSpinner: false,
      selectedBrand: '',
      isLogged: false,
      from: 0,
      to: 4,
      productSelected: {},
      view: 'Products'
    }
  },
  computed:{
    showProducts(){
      if(this.showFilter){
        return this.productsSet
      }
      else{
        return this.products
      }
    },
    showProductsLength(){
      if(this.showFilter){
        return this.productsSet.length;
      }
      else{
        return this.products.length;
      }
    },
    showBrands(){
      return this.brands.slice(this.from,this.to);
    }
  },

  async created() {
    if(Object.values(this.$route.params).length > 0){
      await products.getProducts()
        .then(res => {
          this.products = res.data;
          res.data.forEach(item => {
            this.brands.push(item.brand.name);
          })
        })
      this.brands = [...new Set(this.brands)]; // Limpiamos los objetos repetidos
    }
    else{
      this.$router.push({path:'/'});
    }

    await product.index()
      .then(res => console.log(res))


  },

  methods:{
    removeCart(c){
      this.carts.find((item,index) => {
        if(item === c){
          this.carts.splice(index,1);
        }
      })

    },
    async sendToStock(){
      try{
        await this.carts.forEach(item => {
          product.store(item)
            .then(res => this.showSuccess = true)
            .catch(er => this.showSuccess = false)
        })
      }catch (e) {
        console.error(e);
      }

    },
    filterBrand(v){
      this.selectedBrand = v;
      this.filters = v;
      this.showFilter = true;
      this.productsSet = [...this.products];
      this.productsSet = this.productsSet.filter(item => {
        if(item.brand.name === v){
          return item
        }
      });
      this.showSpinner = true;
    },
    listeningSendProduct(v){
      // Agregar a Carrito
      if(v.type === 1){
        this.$bvModal.show('modal__prov--carrito');
        this.carts.push(v)
      }
      else{
        this.productSelected = v;
        this.$bvModal.show('modal__prov');
      }

    },
    removeFilter(){
      this.filters = [];
      this.showFilter = false;
      this.selectedBrand = '';
      this.showSpinner = true;
    }
  },

  watch:{
    showSpinner(){
      if(this.showSpinner){
        setTimeout(() => {
          this.showSpinner = false
        },1000);
      }
    },

  }
}
</script>

