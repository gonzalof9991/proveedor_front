<template>
  <div class="d-flex justify-content-center align-items-center flex-column box-index m-auto w-100 h-100vh">
    <div class="login">
      <div class="login__header">
        <h4 class="color__proveedor">Iniciar Sesion</h4>
      </div>
      <div class="login__body">
        <InputText
        :data="{id:'user', enableWhen: 2 ,name:'user',placeholder:'Ingresa tu usuario', value:this.form.user, maxlength:25, type:'text', error:'Olvidaste ingresar tu usuario'}"
        @sendValues="listeningInput"
        />
        <InputText
          :data="{id:'pass', enableWhen: 2 ,name:'pass',placeholder:'Ingresa tu clave', value: this.form.pass , maxlength:8, type:'password', error:'Olvidaste ingresar tu clave'}"
          @sendValues="listeningInput"
        />

        <div @click="() => {
          if(showButton){
            login()
          }
        }" :class="(showButton) ? 'login__button' : 'login__button--disabled'">
          Ingresar
        </div>
        <div class="login__texts">
          <p class="login__p color__proveedor">¿Olvidaste tu contraseña?</p>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
import InputText from "~/components/InputText";
import validate from "~/services/validate";
export default {
  name:'index',
  components: {InputText},
  head:{
    title:'Proveedor '
  },
  data(){
    return {
      isLogged: false,
      form: {

      },
      showButton: false
    }
  },
  methods:{
    login(){
      this.isLogged = true;
      this.$router.push({name:'home', params:{"isLogged": this.isLogged}});
    },
    listeningInput(v){
      this.form[v.name] = v.value;
      if(Object.entries(this.form).length === 2){
        this.showButton = validate.validateForm(this.form);
      }
    }
  },
  watch:{
    isLogged(){
      //
    }
  }
}
</script>

