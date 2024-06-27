<!--
  Using Watchers to Set New Values
-->
<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <h1>Stock price simulator</h1>
    <div>
      <p>Actual price CHF {{ price.toFixed(2) }}</p>
      <div v-html="this.signal"></div>
    </div>
    <div>
      <h3>Define signals:</h3>
      <div class="ordertypes">
        <label>Sell order:</label>
        <input v-model="sell1" placeholder="Sell">
      </div>
      <div class="ordertypes">
        <label>Stop loss order:</label>
        <input v-model="sell2" placeholder="Stop-Loss">
      </div>
      <div class="ordertypes">
        <label>Buy order:</label>
        <input v-model="buy1" placeholder="Order">
      </div>
      <a href="#" @click="increasePrice">Increase price</a>&nbsp;&nbsp;
      <a href="#" @click="decreasePrice">Decrease price</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 90.0,
      sell1: 150.0,
      sell2: 80.0,
      buy1: 100.0, //bestens
      signal: ''
    }
  },
  methods: {
    increasePrice() {
      //this.price=this.price+5;
      this.price+=5;
    },
    decreasePrice() {
      this.price-=5;
    }
  },
  watch: {
    price: {
      handler: function (newVal, oldVal) {
        console.log(`aktuell: ${newVal} alt: ${oldVal}`);
        //if sell order defined ...
        if (this.sell1) {
          //check if price is equal-higher than stop-loss
          if (Number(newVal) === Number(this.sell1)) {
            this.signal = `Aktie <span style="color: red">verkauft zu CHF ${this.sell1.toFixed(2)}</span>`;
          }
        }
        if (this.sell2) {
          //check if price is equal-higher than stop-loss
          if (Number(newVal) === Number(this.sell2)) {
            this.signal = `Aktie <span style="color: red">verkauft zu CHF ${this.sell2.toFixed(2)}</span>`;
          }
        }
        if (this.buy1) {
          if (Number(newVal) === Number(this.buy1)) {
            this.signal = `Aktie <span style="color: green">gekauft zu CHF ${this.buy1.toFixed(2)}</span>`;
          }
        }
      },
      immediate: false,
      deep: false
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

.ordertypes {
  margin-bottom: 1rem;
}
span.sell{
  color: red;
}
span.buy{
  color: green;
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
