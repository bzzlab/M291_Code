<template>
  <div class="container">
    <h2>Returning Methods (demo-10d.vue)</h2>
    <h3>Warenkorb: (Artikel: {{ totalItems }}) {{ formatPrize("CHF",totalCost) }}</h3>
    <div class="even-columns" v-for="item in products" :key="item">
      <div class="col">Produkt {{ item.title }}</div>
      <div class="col"><a href="#" @click="addToCart(item.prize)">Add {{ formatPrize(item.currency, item.prize) }}</a></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
      products: [
        {title:"Socken", currency: "CHF", prize: 5.20},
        {title:"Pulli", currency: "CHF", prize: 66.80},
        {title:"Hosen", currency: "CHF", prize: 55.10},
      ],
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
    },
    formatPrize(currency, val) {
      return `${currency} ${val.toFixed(2)}`
    },
  },
}
</script>

<style lang="scss" scoped>
.even-columns {
  display: flex;
  //gap: 0.1em;
  padding: 0.2em;
}

.even-columns > * {
  flex: 1;
}

.card {
  padding: 2em;
  background: var(--clr-gradient);
  color: white;
  border-radius: 0.25rem;
}

/* added to help visualize the widths
.even-columns > *:nth-child(2n + 1) {
  outline: 1px solid blue;
}*/

/* =========================
   GENERAL STYLES
   NOT RELATED TO THE TUTORIAL
============================ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-primary: #ee6352;
  --clr-secondary: #d16e8d;
  --clr-accent: #f7f7ff;
  --clr-gradient: linear-gradient(
          -90deg,
          var(--clr-primary),
          var(--clr-secondary)
  );
  --ff-title: bungee, sans-serif;
  --ff-body: canada-type-gibson, sans-serif;
  --fw-body: 300;
  --fw-bold: 800;
  --fw-title: 400;
  --fw-number: 800;
}

body {
  padding: 2rem;
  min-height: 80vh;
  font-family: var(--ff-body);
  font-weight: var(--fw-body);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
.container {
  width: min(95%, 30rem);
  margin: 0 auto;
}
</style>
