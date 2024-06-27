<template>
  <div>
    <MyComponent />
  </div>
</template>

<script>
import Demo from './components/01_Ex_Watchers.vue'
//import Demo from './components/05_stock-with-data'

export default {
  components: {
    MyComponent: Demo
  },
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
