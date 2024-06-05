<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide number of items (greater 0)</h3>
    <input v-model="amount" placeholder="Gesamtbetrag"/>
    <h3 v-if="amount" class="output">{{ totalValidated }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null
    }
  },
  computed: {
    total() {
      return this.amount
    },
    totalValidated() {
      let betrag;
      let versandkosten = 9.00;

      if (this.total < 0) {
        return `Totalbetrag darf nicht 0 sein!!!!`;
      } else if (Number(this.total) < 50) {
        betrag = Number(this.amount) + versandkosten;
        return `Totalbetrag (inkl. Versandkosten) in CHF ${betrag.toFixed(2)}`
      } else {
        betrag = Number(this.amount);
        return `Totalbetrag (keine Versandkosten) ist CHF ${betrag.toFixed(2)}`
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
