<template>
  <div>
    <h1>Looping through arrays (07_Loops.vue)</h1>
    <!-- Backticks -->
    <div></div>
    <!-- Unordered list -->
    <h4></h4>
    <ul>
      <li></li>
    </ul>
    <!-- Unordered list with in array -->
    <h4></h4>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: 'Hobbies der Me20a!',
      title2: 'Angebot',
      hobbies: ['Fussball', 'Skifahren', 'Lesen', 'Gamen', 'Biken'],
      tanzkurs: [
          {titel:'Salsa Cubana', level: 'beginners', location:'Sihlcity-Jungle'},
          {titel:'Salsa Puerto', level: 'intermediate', location:'Altstetten-Colors'},
          {titel:'Bachata', level: 'advanced', location:'Wohlen'}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
