<!--
Aufgabe: CSS_Modules
a. Wählen Sie je ein Data-Prop, weisen Sie diesem je einen Text zu (?, ??) und geben Sie
den Text über h1,h2 Tags aus. Überprüfen Sie die Ausgabe.
b. Stylen Sie die h1,h2 und die gewählten Data-Props so, dass ausschliesslich die
Styles der Komponente und nicht die Styles src/styles verwendet werden.
Überprüfen Sie die Ausgabe.
-->
<template>
  <div>
    <h1 :class="$style.title">{{ title }}</h1>
    <h2 :class="$style.subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'CSS module Komponente!',
      subtitle: 'Demo_01 04',
    }
  },
}
</script>

<style lang="scss" module>
h1,
h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  //Demo_01-04: Style Vue Components Using CSS Modules
  border: 5px solid red;
}
.subtitle {
  color: #4fc08d;
  font-style: italic;
  //Demo_01-04: Style Vue Components Using CSS Modules
  border: 3px solid orange;
}
</style>
