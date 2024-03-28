<!-- Extra: Ausgabe der Artikel-Grössen -->
<template>
  <div class="container">
    <h1>Demo Basket (10a_DemoBasket.vue)</h1>
    <div class="even-columns" v-for="article in products" :key="article">
      <div class="col">{{article.title}} {{formatPrize(article.currency, article.prize)}}</div>
      <div class="col">
        <select v-model="size_selected">
          <option v-for="size in article.sizes" :key="size.id">{{size.label}}</option>
        </select>
      </div>
      <div class="col"><a href="#" @click="addToCart(article)">Add</a></div>
    </div>
    <h3>Warenkorb ({{totalItems}}): {{formatPrize("EUR",totalCost)}}</h3>
    <div class="even-columns" v-for="item in basket" :key="item">
      <div class="col">{{item.title}} {{formatPrize(item.currency, item.prize)}} Size: {{item.size}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems:0,
      totalCost:0,
      products: [
        {title:"Socken", currency: "EUR", prize: 5.20, sizes:
              [{id:0,label:'39'},{id:1,label:'40'},{id:2,label:'41'},{id:3,label:'44'}]
        },
        {title:"Pulli", currency: "EUR", prize: 66.80,
          sizes: [{id:0,label:'S'},{id:1,label:'M'},{id:2,label:'L'}]
        },
        {title:"Hosen", currency: "EUR", prize: 55.10,
          sizes: [{id:0,label:'S'},{id:1,label:'M'},{id:2,label:'L'}]
        },
        {title:"Schuhe", currency: "EUR", prize: 155.10, sizes:
              [{id:0,label:'39'},{id:1,label:'40'},{id:2,label:'41'},{id:3,label:'44'}]}
      ],
      basket:[],
      size_selected:''
    }
  },
  methods: {
    addToCart(article){
      this.totalItems++;
      this.totalCost = this.totalCost + article.prize;
      this.basket.push({"title": article.title, 'currency': article.currency,
        'prize': article.prize, 'size': this.size_selected })

    },
    formatPrize(currency,preis){
      return `${currency} ${preis.toFixed(2)}`
    }
  }
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
