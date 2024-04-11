<!--
Aufgabe: Loop Directive (v-for): Iterating over different Items
a. Geben Sie die Zahlen 1 bis 5 über das div anhand der Direktive v-for aus (?).
b. Geben Sie die Zahlen 1 bis 5 als Listitem (ul > li) anhand der Direktive v-for aus (??).
c. Erstellen Sie ein Array mit mind. 3 Elementen als Data-Prop und geben Sie deren Inhalt als Listitem (ul > li)
anhand der Direktive v-for aus (???).
d. Erstellen Sie ein Array mit mind. 2 Objekten (mit je 3 Eigenschaften) als Data-Prop und
geben Sie deren Inhalt als Listitem (ul > li) anhand der Direktive v-for aus (????).
-->
<template>
  <div>
    <h1>Looping through arrays</h1>
    <!-- a. -->
    <div v-for="n in 5" :key="n">{{ n }}</div>

    <!-- b. -->
    <ul>
      <li v-for="n in 5" :key="n">{{ n }}. Listitem</li>
    </ul>

    <!-- c. -->
    <h3>{{title1}}</h3>
    <ul>
      <li v-for="(bike,n) in bikes" :key="n">{{bike}}</li>
    </ul>

    <!-- d. -->
    <h3>{{title2}}</h3>
    <ol>
      <li v-for="(kurs,n) in tanzkurse" :key="n">Stil: {{kurs.style}}, Level: {{kurs.level}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1:'Coole MTB\'s',
      title2:'Aktuelle Tanzkurse',
      bikes: ['Fox', 'Trek', 'YT Industries', 'Orbea', 'Canyon'],
      tanzkurse: [
        {style: 'Salsa Puertoricana', level:'beginners', location: 'Shilcity - Jungle'},
        {style: 'Salsa Cubana', level:'intermediate', location: 'Altstetten - Colors'},
        {style: 'Bachata', level:'advanced', location: 'Wohlen - Main'}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 50px;
}

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
