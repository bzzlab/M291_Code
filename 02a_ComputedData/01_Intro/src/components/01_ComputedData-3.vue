<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide your first- and lastname:</h3>
    <input v-model="vorname" placeholder="Vornamen"/>
    <input v-model="nachname" placeholder="Nachnamen"/>
    <input v-model="mobile" placeholder="Mobile-Nr."/>
    <input v-model="birthday" placeholder="Geburtsdatum"/>
    <h3 v-if="vorname && nachname && mobile" class="output">{{personData}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vorname: '',
      nachname: '',
      mobile: '',
      birthday: ''
    }
  },
  computed: {
    personData(){
      return `Mein Name ist ${this.vorname} ${this.nachname} und meine Mobilenr ist ${this.mobile}. `
      + `Geboren am ${this.birthday}.`
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
