<!--
Aufgabe: Data Binding
a. Wählen Sie ein Data-Prop und weisen Sie diesem einen Text zu (?).
b. Geben Sie den Inhalt des Data-Prop über die h1-Tags aus. (Tipp: {{}} verwenden)
-->
<template>
  <div>
    <h5>von {{firstName}},{{lastName}}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Luca",
      lastName: "Züger",
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
