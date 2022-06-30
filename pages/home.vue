<template>
  <div>
    <main class="d-flex justify-content-between">
      <div class="menu__slide">
        <div class="slide__header">

        </div>
        <div class="slide__links">
          <div class="links" @click="view = 'Products'">
            <b-icon animation="pulse" font-scale="1.5" class="text-white" icon="house-door"></b-icon> <p class="p__link">Dashboard</p>
          </div>
          <div class="links">
            <b-icon font-scale="1.5" class="text-white" icon="person"></b-icon> <p class="p__link">Perfil</p>
          </div>
          <div class="links" @click="view = 'Tickets'" v-if="name">
            <b-icon font-scale="1.5" class="text-white" icon="clipboard-data"></b-icon> <p class="p__link">{{showText}}</p>
          </div>
          <div v-if="name === 'Admin'" class="links">
            <b-icon font-scale="1.5" class="text-white" icon="people"></b-icon> <p class="p__link">Usuarios</p>
          </div>
          <div  v-if="name === 'Admin'" class="links" @click="view = 'Categories'">
            <b-icon font-scale="1.5" class="text-white" icon="card-text"></b-icon> <p class="p__link">Categorias</p>
          </div>

        </div>
        <div class="slide__footer">
          <div class="links" @click="signOff()">
              <b-icon font-scale="1.5" class="text-white" icon="signpost"></b-icon> <p class="p__link">Salir</p>
          </div>
        </div>
      </div>

      <Template v-if="view === 'Products'">
        <template v-slot:content>
          <div class="mt-5 d-flex justify-content-between align-items-center">
            <h3 class="ml-5 color__proveedor font-weight-bold bagde--prov">Dashboard</h3>
            <div class="user">
              <h5 class="color__red" v-if="showName">{{showName}}</h5>
              <h6 v-if="name" class="bagde--prov">{{showNameText}}</h6>
            </div>
          </div>
          <div class="filter__brand" v-if="brands.length > 1">
            <div v-if="from > 0" class="button__brand" @click="actionBrands('reduce')">
              <b-icon icon="arrow-left-circle-fill" font-scale="2"></b-icon> </div>
            <div @click="filterBrand(b)" v-for="b in showBrands" :key="b.id"  :class="(selectedBrand === b) ? 'brand__card--active brand' :'brand__card brand'">

              <img v-if="b.length > 0" :src="(showFilterBrand) ? '/gif/loader.gif' : `/img/brands/${b}.webp`" :class="(showFilterBrand) ? 'w-75 filter__gray--not' : 'w-75'" alt="">

            </div>
            <div v-if="to < brands.length" class="button__brand" @click="actionBrands('increment')"> <b-icon icon="arrow-right-circle-fill" font-scale="2"></b-icon> </div>
          </div>
          <div class="result">
            <div class="result__texts">
              <div class="texts_div">
                {{showProductsLength}}
              </div>
              <h4 class="color__proveedor m-0">{{ (showProductsLength > 1) ? 'Resultados' : 'Resultado'}}</h4>
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
              <button v-if="showButtonMore && toProduct >= 4 && showProductsLength >= 4" @click="showMoreProducts()" type="button" class="button__list--add">
                Mostrar mas
              </button>
            </div>
            <div v-else class="d-flex justify-content-center align-items-center flex-grow-1">
              <BounceLoader :loading="true" :color="'#759AFC'" :size="'120px'"></BounceLoader>
            </div>
          </div>
          <!-- Modal Detalle -->
          <b-modal id="modal__prov" size="lg" hide-footer>
            <template #modal-header="{ close }">
              <div>
                <h4 class="text-white font-weight-bold text-center">Detalle del producto</h4>
              </div>
              <div @click="close()">
                <b-icon icon="x-lg" class="x__close" font-scale="1.5"></b-icon>
              </div>

            </template>
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
          <b-modal id="modal__prov--carrito" size="xl" :no-close-on-backdrop=true hide-footer>
            <template #modal-header="{ close }">
              <div>
                <h4 v-if="carts.length > 0" class="text-white font-weight-bold text-center">Precio total: {{showTotalPrice}}</h4>
                <h4 v-else class="text-white font-weight-bold text-center">Carrito de compra</h4>

              </div>
              <div @click="close(); showMessage = false;">
                <b-icon icon="x-lg" class="x__close" font-scale="1.5"></b-icon>
              </div>

            </template>
            <div class="modal__body--carrito">
              <div v-if="carts.length > 0 && !showSend && !showMessage" class="cart__list " v-for="c in carts">
                <b-img class="w-8" :src="c.image_url"></b-img>
                <span class="flex-grow-1 text-center color__proveedor">{{c.name}}</span>
                <span class="mr-3 font-weight-bold"> Precio: {{`$${new Intl.NumberFormat().format(c.totalPrice)}`}}</span>
                <span class="mr-3 font-weight-bold"> Cantidad: {{c.count}}</span>
                <b-icon @click="removeCart(c)" icon="dash-circle-fill" font-scale="1.5" class="icon__delete"></b-icon>
              </div>
              <div v-if="carts.length === 0  && !showSend && !showMessage" class="d-flex justify-content-center align-items-center">
                <h5 class="color__proveedor">No hay productos en su carrito.</h5>
              </div>
              <div v-if="showSend" class="d-flex justify-content-center align-items-center">
                <lord-icon
                  src="https://cdn.lordicon.com/ukodqrxd.json"
                  trigger="loop"
                  colors="primary:#e55958,secondary:#e55958"
                  stroke="100"
                  style="width:250px;height:250px">
                </lord-icon>
              </div>
              <div v-if="showMessage" class="d-flex flex-column justify-content-center align-items-center">
                <h4 class="bagde--prov">Compra exitosa</h4>
                <lord-icon
                  src="https://cdn.lordicon.com/dlhcdyui.json"
                  trigger="loop"
                  colors="primary:#e55958,secondary:#e55958"
                  style="width:250px;height:250px">
                </lord-icon>
                <div class="message--success">Se ha registrado el ticket N°{{ticketId}} en el sistema, para más detalles vaya a la página "{{showText}}", muchas gracias.</div>
              </div>

            </div>
            <div v-if="carts.length > 0" class="modal__footer--carrito">
              <div @click="sendInvoice(); sendToStock();" class="footer__button--carrito">
                <span v-if="showSend">Enviando... </span>
                <div v-else class="d-flex justify-content-center align-items-center">
                  <span>Enviar</span>
                </div>
              </div>
            </div>


          </b-modal>
        </template>

      </Template>

      <Template v-if="view === 'Tickets'">
        <template v-slot:content>
          <div class="mt-5 d-flex justify-content-between align-items-center">
            <h3 class="ml-5 color__proveedor font-weight-bold bagde--prov">{{ showText }}</h3>
            <div class="user">
              <h5 class="color__red" v-if="showName">{{showName}}</h5>
              <h6 v-if="name" class="bagde--prov">{{showNameText}}</h6>
            </div>
          </div>
          <div class="tickets">
            <div v-if="tickets.length > 0" class="tickets__table">
              <b-table striped hover :items="setTickets" class="font-weight-bold"></b-table>
            </div>
            <div v-else class="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <lord-icon
                src="https://cdn.lordicon.com/nlzvfogq.json"
                trigger="loop"
                colors="primary:#e55958,secondary:#e55958"
                style="width:250px;height:250px">
              </lord-icon>
              <h4 class="bagde--prov">No hay ordenes creadas, muchas gracias.</h4>
            </div>
          </div>
        </template>
      </Template>

      <Template v-if="view === 'Categories'">
        <template v-slot:content>
          <div class="mt-5 d-flex justify-content-between align-items-center">
            <h3 class="ml-5 color__proveedor font-weight-bold bagde--prov">Categorias</h3>
            <div class="user">
              <h5 class="color__red" v-if="showName">{{showName}}</h5>
              <h6 class="bagde--prov">Admin</h6>
            </div>
          </div>
          <div class="tickets">
            <div v-if="categories.length > 0" class="tickets__table">
              <b-table-simple responsive="xl" striped hover class="text-center" align="center" >
                <b-thead>
                  <b-tr>
                    <b-th>ID</b-th>
                    <b-th>Nombre</b-th>
                    <b-th>Cantida de productos</b-th>
                    <b-th>Opciones</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="c in categories" :key="c.id">
                    <b-th>{{c.id}}</b-th>
                    <b-th>{{c.name}}</b-th>
                    <b-th>{{c.products.length}}</b-th>
                    <b-th>
                      <div class="d-flex justify-content-around align-items-center">
                        <div class="update color__terc" @click="openModal('modal-categories',c,'categories')">
                          <b-icon icon="pencil-fill"></b-icon> <span>Editar</span>
                        </div>
                        <div class="delete color__red--option">
                          <b-icon icon="trash-fill"></b-icon> <span>Eliminar</span>
                        </div>
                      </div>

                    </b-th>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
            <div v-else class="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <lord-icon
                src="https://cdn.lordicon.com/nlzvfogq.json"
                trigger="loop"
                colors="primary:#e55958,secondary:#e55958"
                style="width:250px;height:250px">
              </lord-icon>
              <h4 class="bagde--prov">No hay categorias creadas, muchas gracias.</h4>
            </div>
          </div>
          <!-- Modal Detalle -->
          <b-modal id="modal-categories" size="md" hide-footer>
            <template #modal-header="{ close }">
              <div>
                <h4 class="text-white font-weight-bold text-center">Actualizar Categoria</h4>
              </div>
              <div @click="close()">
                <b-icon icon="x-lg" class="x__close" font-scale="1.5"></b-icon>
              </div>

            </template>
            <div class="modal__body">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <InputText :data="{ id: 'name' , name:'name' , label: 'Nombre', type: 'text' , placeholder: 'Ingresa el nombre' , value: category.name}"/>
                <div class="d-flex justify-content-center align-items-center">
                  <Button :data="{type:'button' , class: 'button' , name:'Actualizar'}"/>
                </div>
              </div>
            </div>

          </b-modal>
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
import tickets from "@/services/API/tickets";
import factura from "@/services/API/Contabilidad/factura";
import Categories from '@/services/API/categories'
import products_tickets from "@/services/API/products_tickets";
import moment from 'moment';
import categories from "@/services/API/categories";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import user from "@/services/API/user";

export default {
  name: 'IndexPage',
  components: {Button, InputText, Template, Card, BounceLoader},
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
      from: 0, // Brand
      to: 4, // Brand
      fromProduct: 0, // Product
      toProduct: 4, // Product,
      showSend: false,
      showFilterBrand: false,
      showButtonMore: false,
      showMessage: false,
      productSelected: {},
      ticketId: 0,
      totalPrice: 0, // Precio total carrito
      view: 'Products',
      tickets: [],
      setTickets: [],
      categories: [],
      category: {},
      name: '',
      user: {}
    }
  },
  computed:{
    showText(){
      if(this.name === 'Adquisiciones'){
        return 'Mis Pedidos';
      }
      else if (this.name === 'Proovedor'){
        return 'Ordenes';
      }
      else{
        return 'Ordenes';
      }
    },
    showNameText(){
      if(this.name === 'Adquisiciones'){
        return 'Comprador';
      }
      else if (this.name === 'Proovedor'){
        return 'Colabolador';
      }
      else{
        return 'Admin';
      }
    },
    showProducts(){
      if(this.showFilter){
        return this.productsSet.slice(this.fromProduct,this.toProduct)
      }
      else{
        return this.products.slice(this.fromProduct,this.toProduct);
      }
    },
    showCategory(){
      return this.category;
    },
    showName(){
      return this.name;
    },
    showProductsLength(){
      if(this.showFilter){
        return this.productsSet.length;
      }
      else{
        return this.products.length;
      }
    },
    showTotalPrice(){
      let totalPrice = this.carts.reduce((sum,item) => {
        return sum += item.totalPrice;
      },0);
      this.totalPrice = totalPrice;
      let totalPriceFormatter = new Intl.NumberFormat().format(totalPrice)
      return `$${totalPriceFormatter}`;
    },
    showBrands(){
      return this.brands.slice(this.from,this.to);
    },

  },

  async mounted() {
    if(localStorage.getItem('user')){
      this.name = localStorage.getItem('user');
      await user.get()
        .then(res => {
          res.data.forEach(item =>{
            if(item.name === this.name){
              this.user = item;
            }
          })
        })
      await products.getProducts()
        .then(res => {
          this.products = res.data;
          res.data.forEach(item => {
            this.brands.push(item.brand.name);
          })
        })
      this.showButtonMore = true;
      this.brands = [...new Set(this.brands)]; // Limpiamos los objetos repetidos
    }
    else{
      this.$router.push({path:'/'});
    }

  },

  methods:{
    signOff(){
      localStorage.removeItem('user');
      this.$router.push({path:"/"});
    },
    openModal(id,data,type){
      if(type === 'categories'){
        this.category = data;
      }
      this.$bvModal.show(id);
    },
    showMoreProducts(){
      if(this.toProduct < this.products.length){
        this.fromProduct = 0;
        this.toProduct += 6;
      }
      else{
        this.toProduct = this.products.length;
      }
    },

    async getCategories(){
      await categories.get()
        .then(res => {
          this.categories = res.data;
        })
    },

    actionBrands(params){
      if(params == 'reduce'){
        if (this.from !== 0){
          this.from -= 4;
          this.to -= 4;
          this.showFilterBrand = true;
          setTimeout(() => {
            this.showFilterBrand = false;
          },1000)
        }
      }
      else{
        if(this.to < this.brands.length){
          this.from += 4;
          this.to += 4;
          this.showFilterBrand = true;
          setTimeout(() => {
            this.showFilterBrand = false;
          },1000)
        }
      }
    },

    removeCart(c){
      this.carts.find((item,index) => {
        if(item === c){
          this.carts.splice(index,1);
        }
      })

    },

    async sendToStock(){
      this.showSend = true;
      try{
        await this.createTicket();
      }catch (e) {
      }

    },

    async sendInvoice(){
      let invoice = {
        date: moment().format('YYYY-MM-DD'),
        totalAmount : this.totalPrice,
        user: `Proovedor-${this.name}`
      };
      let products = this.carts.map(item => {
        let obj = {
          cantidad: item.count,
          idProducto: item.id,
          nombreProducto: item.name,
          precio: item.price

        }
        return obj;
      })
      await factura.store(invoice,products);
    },

    async createTicket(){

      let arrayId = this.carts.map(item => item.id);
      let amount = this.carts.reduce((sum,item) => {return sum += item.count},0);
      let userId = this.user.id;
      console.log(userId);
      setTimeout(async () => {

        await tickets.post(this.totalPrice,arrayId,amount,userId)
          .then((res) => {
            this.ticketId = res.data.id;
            this.showSend = false;
            this.showMessage = true;
          })
        await products_tickets.post(this.ticketId,arrayId)
          .then(res => {
            this.carts = [];
          })
      },1500);

    },

    async getTickets(){

      await tickets.get()
        .then(res => {
          this.tickets = res.data;
          this.setTickets = [];
          if(this.user.name === 'Adquisiciones'){
            this.tickets.find(item => {
              if(item.users.name === this.user.name && this.user.type_of_user_id === 3){
                let obj = {
                  ID : item.id,
                  nro_ticket : item.nro_ticket,
                  destino: item.send_to,
                  cantidad_de_productos: item.amount,
                  creación: moment(item.created).format('DD/MM/YYYY'),
                  precio_total: `$${new Intl.NumberFormat().format(item.total_price)}`,
                  usuario: item.users.name,
                  estado: 'Enviado'
                }
                this.setTickets.push(obj);
              }


            })
          }
          else{
            this.setTickets = [];
            this.tickets.forEach(item => {
              let obj = {
                ID : item.id,
                nro_ticket : item.nro_ticket,
                destino: item.send_to,
                cantidad_de_productos: item.amount,
                creación: moment(item.created).format('DD/MM/YYYY'),
                precio_total: `$${new Intl.NumberFormat().format(item.total_price)}`,
                usuario: item.users.name,
                estado: 'Enviado'
              }
              this.setTickets.push(obj);
            })
          }

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
      this.toProduct = 4;
    },

    listeningSendProduct(v){
      if(v.type === 1){
        this.$bvModal.show('modal__prov--carrito');
        let product = {
          totalPrice: v.price * v.count,
          ...v
        }
        let productFind = this.carts.find(cart => cart.name === v.name);
        if(productFind){
          if(productFind.count + v.count > 8){
          }else{
            productFind.count += v.count;
            productFind.totalPrice = productFind.price * productFind.count;
          }
        }
        else{
          this.carts.push(product);
        }

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
    toProduct(){
      if(this.toProduct < 58){
        this.showButtonMore = true;
      }
      else{
        this.showButtonMore = false;
      }
    },
    view(){
      if(this.view === 'Tickets'){
        this.getTickets();


      }
      if(this.view === 'Categories'){
        this.getCategories();
      }
    }

  }
}
</script>

