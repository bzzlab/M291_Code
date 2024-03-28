<template>
  <div>
    <h1>Returning Methods (10b_DemoBasket.vue)</h1>
    <div>Warenkorb ({{totalItems}}) {{formatCurrency(totalCost)}}</div>
    <ul>
      <li v-for="n in 5" :key="n">Product {{n}}: CHF {{n.toFixed(2)}}
        <a href="#" @click="addToCart(n)">Add</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems:0,
      totalCost:0,
    }
  },
  methods: {
    addToCart(n){
      this.totalItems++;
      this.totalCost = this.totalCost + n;
    },
    formatCurrency(val){
      return `CHF ${val.toFixed(2)}`
    }
  }
}
</script>

<style lang="scss" scoped>
#content {
  padding-left: 20px;
}

ul {
  padding-left: 20px;
}
li {
  display: block;
  list-style: none;

  + li {
    margin-top: 10px;
  }
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
</style>
