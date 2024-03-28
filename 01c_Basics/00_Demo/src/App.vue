<template>
  <div>
    <ShoppingComp/>
  </div>
</template>

<script>
/* Import all components */
import Demo11 from './components/10d_DemoBasket.vue'
export default {
  components:{
    ShoppingComp: Demo11,
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
