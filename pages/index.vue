<template>
  <div class="content">
    <div class="img">
      <b-img src="/img/login.jpg" class="img__content"></b-img>
    </div>
    <div class="content__login">
      <div class="login">
        <div class="login__header">
          <h4 class="color__terc text__xl">Iniciar Sesion</h4>
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
          <div v-if="showError" class="login__texts">
            <p class="login__p font-weight-bold color__red--option">Contraseña o usuario incorrecto.</p>
          </div>
          <div class="login__texts d-none">
            <p class="login__p color__proveedor">¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "~/components/InputText";
import validate from "~/services/validate";
import user from "@/services/API/user";
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
      showButton: false,
      user: {},
      showError: false
    }
  },
  mounted() {
    if(localStorage.getItem('user')){
      this.$router.push({name: 'home'});
    }
  },
  methods:{
    async login(){
      this.isLogged = false;
      await user.get()
        .then(res => {
          res.data.forEach(item => {
            if(item.name === this.form.user && item.password === this.form.pass){
              this.isLogged = true;
              this.user = item;
            }
          })
        });
      if(this.isLogged){
        localStorage.setItem('user',this.user.name);
        await this.$router.push({name: 'home'});
      }
      else{
        this.showError = true;
        this.form = {};
        this.showButton = false;

      }

    },
    listeningInput(v){
      this.showError = false;
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

