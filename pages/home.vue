<template>
  <div>
    <main class="d-flex justify-content-between">
      <div class="menu-slide">
        <div class="slide__header">
          Logo
        </div>
        <div class="slide__links">
          <div class="links">
            <b-icon animation="pulse" font-scale="1.5" class="text-white" icon="house-door"></b-icon> <p class="p__link">Dashboard</p>
          </div>
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="person"></b-icon> <p class="p__link">Perfil</p>
          </div>
          <div class="links">
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
      <div class="main">
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
          }"> < </div>
          <div @click="filterBrand(b)" v-for="b in showBrands" key="b.id"  :class="(selectedBrand === b) ? 'brand__card--active brand' :'brand__card brand'">

            <img v-if="b.length > 0" :src="`/img/brands/${b}.webp`" class="w-75" alt="">

          </div>
          <div v-if="to < brands.length" class="button__brand" @click="from += 4; to += 4;"> > </div>
        </div>
        <div class="result">
          <div class="result__texts">
            <div class="texts_div">
              {{showProductsLength}}
            </div>
            <h4 class="color__proveedor m-0">Resultados</h4>
          </div>
          <div>
            <span >Ordenar por</span>
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
              :key="p.id"
              :data="p"
              @sendProduct="listeningSendProduct"
            />

          </div>
          <div v-else class="d-flex justify-content-center align-items-center flex-grow-1">
            <BounceLoader :loading="true" :color="'#00458F'" :size="'120px'"></BounceLoader>
          </div>
        </div>
      </div>

    </main>
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
  </div>

</template>

<script>
import products from "~/services/API/products.js";
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';
import Card from "~/components/Card";
import product from "~/services/API/STOCK/product.js";
export default {
  name: 'IndexPage',
  components: {Card, BounceLoader},
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
      productSelected: {}
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
    async sendToStock(p){
      console.log(product.store(this.carts[0]));
      await this.carts.forEach(item => {
         product.store(item)
          .then(res => this.showSuccess = true)
          .catch(er => this.showSuccess = false)
      })
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
<style>

.cart__list{
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%) !important;
  display: flex;
  height: 100px;
  align-items: center;
  padding: 10px;
  margin-bottom: 3%;
}

.footer__button--carrito{
  background: linear-gradient(90deg, rgba(186,44,63,1) 18%, rgba(204,50,70,1) 56%, rgba(215,56,77,1) 78%);
  padding: 10px;
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #fff;
  font-size: 1.3rem;
  transition: all .5s ease;
}

.footer__button--carrito:hover{
  cursor: pointer;
}

.w-10{
  width: 10%;
}

.icon__delete{
  color: #00254e;
  transition: all .5s ease;
}

.icon__delete:hover{
  cursor: pointer;
  color: #003267;
}

.modal__body{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.body__header{
  margin-bottom: 3%;
}

.body__texts{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}







.bagde--prov{
  background: #014186;
  color: #fff;
  padding: 8px;
  border-radius: 10px;
}
.user{
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%) !important;
  margin: 0 20px;
  transition: all .4s ease;
  border-radius: 10px !important;
  width: 300px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  border-bottom: 4px solid #013268;
}
.button__brand{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #002853;
  color: #fff;
  border-radius: 10px;
  font-size: 1.5rem;
  transition: all .5s ease;
}
.button__brand:hover{
  background: #003c77;
  cursor: pointer;
}
.menu-slide{
  width: 15%;
  background: linear-gradient(0deg, rgba(0,69,143,1) 18%, rgba(1,46,96,1) 56%, rgba(0,33,68,1) 78%);
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0/30%) !important;
}

.slide__links{
  flex-grow: .5;
}
.links{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;

}
.p__link {
  width: 100%;
  color: #fff;
  padding: 10px;
  margin: 0;
  font-size: 1.3rem;
}
.links:hover{
  background: linear-gradient(90deg, rgba(254,101,99,1) 18%, rgba(255,121,119,1) 56%, rgba(255,144,143,1) 78%);
  color: #fff;
  cursor: pointer;
}

.product__list{
  display: flex;
  flex: 1 1 300px;
  justify-content: center;
  flex-wrap: wrap;
}


.filter__brand{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  flex-wrap: wrap;
  flex: 1 1 100px;
}

.brand{
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand__card{
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0/20%) !important;
  margin: 0 20px;
  transition: all .4s ease;
  border-radius: 10px !important;
  filter: grayscale(100%);
}
.brand__card--active{
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0/20%) !important;
  margin: 0 20px;
  border-bottom: 3px solid #00458F;
  border-radius: 10px;
}
.brand__card--active:hover{
  cursor: pointer;
  position: relative;
  top: -10px;
  filter: grayscale(0%);
}
.brand__card:hover{
  cursor: pointer;
  position: relative;
  top: -10px;
  filter: grayscale(0%);
}

.result{
  display: flex;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 25px;
  width: 60%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0/20%) !important;

}
.result__texts{
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.texts_div{
  width: 40px;
  height: 40px;
  background: #00458F;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  margin-right: 3%;
}

.product__filters{
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%) !important;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  height: max-content;
  border-bottom: 6px solid #003f84;
}
.filter{
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  background: #fe6563;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all .5s ease;
}
.color__red{
  color: #fe6563;
}
.filter:hover{
  background: #0b62bc;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%) !important;
}
.filter__x{
  cursor: pointer;
}
</style>

