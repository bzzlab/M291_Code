<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide your first- and lastname:</h3>
    <input v-model="vorname" placeholder="Vorname eingeben" />
    <input v-model="nachname" placeholder="Nachname eingeben" />
    <input v-model="telefon" placeholder="telefon eingeben" />
    <h3 v-if="vorname && nachname && telefon" class="output">{{personenInfo}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vorname: '',
      nachname:'',
      telefon:''
    }
  },
  computed: {
    personenInfo(){
      return `Ich heisse ${this.vorname} ${this.nachname} und bin erreichbar unter dem Mobile ${this.telefon}`
    }
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
}
</style>
