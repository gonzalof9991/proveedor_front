<template>
  <button @click="$emit('click',data)" :type="data.type" :class="data.class">
    {{data.name}}
  </button>
</template>
<script>
export default {
  props:[ 'data']
}
</script>
