<!--
Aufgabe: Rabatt mit Watchers ausgeben
a. Erstellen Sie zwei Data-Properties alterRabatt=0% und neuerRabatt = 10%.
b. Geben Sie die zwei Data-Properties sinnvoll aus.
c. Erstellen Sie eine Methode, welche jeweils neuerRabatt auf 8% erhöht.
d. Erstellen Sie einen Watcher auf neuerRabatt, welche die Änderungen verfolgt.
Die Data Properties alterRabatt und neuerRabatt sollen auf der Webseite ausgeben.
Ferner soll der alte und neue Wert bei jeder Änderung auf der Console ausgegeben werden.
-->
<template>
  <div class="container">
    <h1>Ausverkauf Watcher</h1>
    <div>
      Ausverkauf
      <!--  b.    -->
      <del>Was {{ alterRabatt }}%</del>
      <strong> Now {{ neuerRabatt }}% OFF</strong><br/>
      <!--  c.    -->
      <a href="#" @click="update">Increase neuerRabatt</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* a. */
      alterRabatt: 0,
      neuerRabatt: 10,
    }
  },
  watch: {
    /* d. */
    neuerRabatt: {
      handler: function (newVal, oldVal){
        console.log(`neuerRabatt changed: ${newVal}, ${oldVal}`);
        this.alterRabatt = oldVal;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    /* c. */
    update(){
      this.neuerRabatt = this.neuerRabatt + 8;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
