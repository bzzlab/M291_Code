<template>
  <div>
    <h1></h1>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
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
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
