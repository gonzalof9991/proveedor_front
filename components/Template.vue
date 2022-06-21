<template>
  <Transition name="template">
    <div class="main">
      <slot name="content"></slot>
    </div>
  </Transition>

</template>
<script>
export default {
  name: 'Template',
}
</script>
