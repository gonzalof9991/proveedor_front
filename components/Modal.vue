<template>
  <b-modal
    :id="data.id"
    hide-footer
    :content-class="data.contentClass"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :no-enforce-focus="true"
  >
  <slot name="content">

  </slot>
  </b-modal>
</template>
<script>
export default {
  props:[ 'data'],
  data(){
    return {

    }
  },
  created() {
  },
  methods:{

  }
}
</script>
