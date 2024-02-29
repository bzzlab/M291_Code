<template>
   <div>
    <MyComp01/>
    <MyComp02/>
    <MyComp03/>
  </div>
</template>

<script>
/* Import all components */
import Exe01 from './components/01_Exercise.vue';
import Exe02 from './components/02_Exercise.vue';
import Exe03 from './components/03_Exercise.vue';

export default {
  components: {
    MyComp01: Exe01,
    MyComp02: Exe02,
    MyComp03: Exe03
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
