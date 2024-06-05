<!--
Aufgabe: Vor- und Nachname mit computed Data-Property ausgeben
a. Erstellen Sie zwei Data-Properties vor- und nachname.
b. Binden Sie die zwei Variablen aus a. an je ein Input-Element und legen Sie
einen sinnvollen Placeholder fest.
c. Erstellen Sie eine computed Data-Property, damit Vor- und Nachname als vollen/kompletten
Namen ausgegeben wird.
d. Geben Sie die computed Data-Property im h3-Tag mit Styling-Klasse output aus.
-->
<template>
  <div class="container">
    <h3>Geben Sie Ihren Vor- und Nachnamen ein:</h3>
    <input v-model="vorname" placeholder="Vorname" />
    <input v-model="nachname" placeholder="Nachname" />

    <h3 class="output">{{ vollerName }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vorname: '',
      nachname: '',
    }
  },
  computed: {
    vollerName() {
      return `${this.vorname} ${this.nachname}`
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
}
</style>
