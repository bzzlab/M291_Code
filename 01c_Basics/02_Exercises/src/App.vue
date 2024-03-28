<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
    <!-- If more than HTML element then root (like div) is mandatory -->
    <LoopComp/>
  </div>
</template>

<script>
/* Import all components */
import Demo01 from './components/01_Exercise.vue'

export default {
  components: {
    LoopComp: Demo01,

  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
