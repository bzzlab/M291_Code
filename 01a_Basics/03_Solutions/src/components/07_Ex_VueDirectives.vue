<!--
Aufgabe: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
a. Wählen Sie je ein Data-Prop für die Directives v-text, v-html, v-bind
b. Die Tags h1,h2 und a sollen v-if, v-else-if, v-else sinnvoll versehen werden.
c. Überprüfen Sie jeweils die Ausgabe unter b indem Sie die verschiedenen
von v-if, v-else-if testen.
-->
<template>
  <div>
    <h1 v-if="false" v-text="kurs">wird geladen...</h1>
    <h2 v-else-if="true" v-html="text"/>
    <a v-else v-bind:href="link.url" v-text="link.title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      kurs: 'Salsa',
      beschreibung: 'der Kurs findet <strong>statt!</strong>',
      // v-html
      text: '<b>Level Beginners</b><br/><strong>Time: 19:00-20:15</strong><br/><small>Teacher: Lilly</small>',
      // v-bind
      link: {
        url: 'http://www.salsa-xy.ch',
        title:'Verschiebe-Datum'
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
