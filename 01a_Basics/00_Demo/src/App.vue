<template>
  <div>
    <MyComponent1/>
    <MyComponent2/>
  </div>
</template>

<script>
/* Import all components */
import Demo01 from './components/01b_Title.vue'
import Demo02 from './components/02_DataBinding.vue'
export default {
  components:{
    MyComponent1: Demo01,
    MyComponent2: Demo02
  }
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
