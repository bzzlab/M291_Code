<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Meine erste Komponente (01b_Title.vue)!',
    }
  },
}
</script>

<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
