<template>
  <div id="app">
    <b-container fluid>
      <h2>Films</h2>
      <ul v-if="films.length">
        <li v-for="film in films" :key="film.url">
          {{ film.title }} was released in {{ film.release_date }}
        </li>
      </ul>
      <div v-else>
        <i>Loading data...</i>
      </div>
      <Ships />
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Ships from './components/Ships'
export default {
  name: 'app',
  components: {
    Ships
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["films"])
  },
  created() {
    this.$store.dispatch("loadFilms")
  }
}
</script>
