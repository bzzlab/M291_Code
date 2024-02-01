<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
<!--    <MyComponent />-->
<!--    <CssComponent/>-->
    <MusikComp/>
  </div>
</template>

<script>
/* Import all components */
import Demos from './components/01a_Simple'
import CssModule from './components/04_CSS-Modules.vue'
import KursModul from './components/06_TwoWayBinding.vue'


export default {
  components: {
    MyComponent: Demos,
    CssComponent: CssModule,
    MusikComp: KursModul
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
