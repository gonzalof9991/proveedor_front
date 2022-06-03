<template>
  <header class="shadow bg-white">
      <nav class="d-flex p-4 justify-content-between align-items-center">
        <div>
            <img src="/img/logo_empresa.png" class="w-50 d-none" alt="logo_empresa">
        </div>
        <div class="w-25">
          <input type="text" placeholder="Buscar productos..." class="login__form" v-model="find">
        </div>
        <div>
          Categorias
        </div>
      </nav>
  </header>
</template>
<script>
import InputText from "~/components/InputText";
export default {
  name:'Header',
  components: {InputText},
  data(){
    return {
      find: ''
    }
  },
  methods:{
    listeningInput(v){
      console.log(v);
    }
  }
}
</script>

