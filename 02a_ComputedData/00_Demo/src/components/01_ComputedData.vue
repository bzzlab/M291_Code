<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide your first- and lastname:</h3>
    <input />
    <input />

    <h3 class="output"></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
