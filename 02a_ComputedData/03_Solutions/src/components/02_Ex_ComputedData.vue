<!--
Aufgabe: Sitzplätze reservieren und Anzahl überprüfen
a. Erstellen Sie ein Data-Property seat (Sitze).
b. Binden Sie das Data-Property an das Input-Element und legen Sie
einen sinnvollen Placeholder fest.
c. Erstellen Sie eine computed Prop, damit die eingegebene Anzahl Sitz zurückgegeben wird.
d. Erstellen Sie eine computed Prop, damit die eingegebene Anzahl Sitze überprüft werden.
Wenn weniger als 2 Sitzplätze eingegeben werden, dann erscheint die Fehlermeldung
'Totale Anzahl Sitzplätze muss mehr als 2 sein' (h3-Tag mit Styling-Klasse output aus)
-->
<template>
  <div class="container">
    <h3>Anzahl Kino-Sitzplätze ein (mehr als 2)</h3>
    <!-- b. -->
    <input v-model="seats" placeholder="Anzahl Sitzplätze"/>
    <h3 v-if="seats" v-html="totalSeats"></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* a. */
      seats:null
    }
  },
  computed: {
    /* c. */
    totalSeats(){
      if (this.seats < 2){
        return '<span class="error">Totale Anzahl Sitzplätze muss mehr als 2 sein!</span>';
      } else {
        return `<span class="output">Besten Dank. Sie haben ${this.seats} Sitzplätze reserviert.</span>`
      }
    }
    /* d. */
  }
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
  color: green;
}
.error {
  font-size: 16px;
  color: red;
}
</style>
