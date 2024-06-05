<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide number of items (greater 0)</h3>
    <input v-model="items" placeholder="Gesamtmenge"/>
    <h3 v-if="items"  class="output">{{totalValidated}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:null
    }
  },
  computed: {
    total(){
      return this.items
    },
    totalValidated() {
      let betrag;
      if (this.total < 50){
        //return 'Versandkosten betragen CHF 9.00!'
        betrag=Number(this.items)+9.00;
        return `Total (inkl. Versandkosten) CHF ${betrag.toFixed(2)}`
      } else {
        betrag=Number(this.items);
        return `Total (ohne Versandkosten) CHF ${betrag.toFixed(2)}`
      }
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
  color: red;
}
</style>
