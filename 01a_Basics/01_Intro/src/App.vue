<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
    <MusikComp/>
  </div>
</template>

<script>
/* Import all components */
import KursModul from './components/06_TwoWayBinding.vue'


export default {
  components: {
    MusikComp: KursModul
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
