<!--
Aufgabe: Data_Binding Syntax Using Interpolation and Conditionals
a. Wählen Sie ein Data-Prop und weisen Sie diesem einen Text zu (?).
b. Geben Sie den Inhalt des Data-Prop über die h1-Tags aus, jedoch wie folgt:
  - falls Data-Prop isLowerCase (??) true ist, erfolgt die Ausgabe in kleinschrift
  - falls Data-Prop isLowerCase false ist, erfolgt die Ausgabe in GROSSSCHRIFT
-->
<template>
  <div>
    <h1>{{isLowerCase ? firstName.toLowerCase(): firstName.toUpperCase()}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "My name is Luca",
      isLowerCase: true
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
  border: 2px solid lightgreen;
}
</style>
