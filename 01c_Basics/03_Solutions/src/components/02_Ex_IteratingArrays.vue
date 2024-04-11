<template>
  <div>
    <h1>Looping through arrays of objects</h1>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        {{ item.title }}
        <ol>
          <li v-for="(fav, m) in item.favorite" :key="m"> {{ fav }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {title:"Blues", favorite:["Texas-Style", "Soling", "Rhythm"]},
        {title:"Jazz", favorite:["Standards", "Soling", "Arpeggios"]},
        {title:"Rock", favorite:["Cover", "Soling", "Rhythm"]}
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
