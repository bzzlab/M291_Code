<template>
  <div>
    <h1>{{ istGross ? title.toUpperCase(): title.toLowerCase() }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'willkommen geschätzte klasse me21e!',
      istGross: false
    }
  }
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
