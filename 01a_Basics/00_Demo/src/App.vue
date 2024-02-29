<template>
  <div>
    <MyComponent1/>
  </div>
</template>

<script>
/* Import all components */
import Demo01 from './components/01b_Title.vue'
export default {
  components:{
    MyComponent1: Demo01
  }
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
