<template>
  <section>
    <div>
      <h2></h2>
      <h3></h3>
    </div>
    <div>
      <label>
        <input/>
      </label>
      <label>
        <select>
          <option value="Jazz">Jazz</option>
          <option value="Rock">Rock</option>
          <option value="Funk">Funk</option>
          <option value="Blues">Blues</option>
        </select>
      </label>
    </div>
    <div>
      <h3>Anmeldung</h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" module>
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgray;
}

.subtitle {
  color: #4fc08d;
  font-style: italic;
  text-align: center;
}

.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;

    + li {
      margin-top: 20px;
    }
  }
}
</style>
