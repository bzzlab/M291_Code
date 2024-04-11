<template>
  <div>
    <h1>Tanz-Angebot</h1>
    <ul>
      <li v-for="kurs in tanzkurs" :key="kurs">Bez: {{kurs.titel}}, Ort: {{kurs.location}},
          Zeiten: <label v-for="zeit in kurs.times" :key="zeit">{{zeit}}, </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanzkurs: [
        {titel:'Salsa Cubana', level: 'beginners', location:'Sihlcity-Jungle', times:['17:30','19:00','20:30']},
        {titel:'Salsa Puerto', level: 'intermediate', location:'Altstetten-Colors', times:['17:00','18:30','20:00']},
        {titel:'Bachata', level: 'advanced', location:'Wohlen', times:['17:15','18:45','20:15']}
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
