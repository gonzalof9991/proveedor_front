<template>
  <div class="w-100 d-flex flex-column justify-content-center align-items-center">
    <label :for="data.name" :class="(showError) ? 'label--error' : 'label'">{{data.label}}</label>
    <input  :class="(showError) ? 'login__form--error' :'login__form mb-3'" :id="data.id" :name="data.name" :type="data.type"  v-model="value" :maxlength="data.maxlength" :placeholder="data.placeholder" @keyup="validate()">
    <p v-if="showError"   class="login__p--error">{{data.error}}</p>
  </div>
</template>
<script>
export default {
  name:'InputText',
  props:['data'],
  data(){
    return {
      error: '',
      showError: false,
      value: ''
    }
  },
  methods:{
    validate(){
      try{
        if(this.value){
          this.showError = (this.value.length > 0) ? false : true;
          this.error = (!this.showError) ?  '' : this.data.error;
          if(!this.showError) this.$emit('sendValues',{name: this.data.name, value: this.value});
        }
        else{
          this.showError = true;
          this.error = (this.showError) ? this.data.error : '';
          this.$emit('sendValues', {name: this.data.name, value: ''});
        }
      }catch (e) {

      }


    },

  }
}
</script>
