<template>
  <div class="w-100">
    <input :class="(showError) ? 'login__form--error' :'login__form mb-3'" :id="data.id" :name="data.name" :type="data.type"  v-model="data.value" :maxlength="data.maxlength" :placeholder="data.placeholder" @keyup="validate()">
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
    }
  },
  methods:{
    validate(){
      if(this.data.value){
        console.log(this.data.value.length)
        this.showError = (this.data.value.length > 0) ? false : true;
        this.error = (!this.showError) ?  '' : this.data.error;
        if(!this.showError) this.$emit('sendValues',{name: this.data.name, value: this.data.value});
      }
      else{
        this.showError = true;
        this.error = (this.showError) ? this.data.error : '';
        this.$emit('sendValues', {name: this.data.name, value: ''});
      }

    }
  }
}
</script>
