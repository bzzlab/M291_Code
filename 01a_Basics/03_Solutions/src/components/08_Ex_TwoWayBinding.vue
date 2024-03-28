<!--
Aufgabe: TwoWayBinding Using v-model
a. Wählen Sie je ein Data-Prop, weisen Sie diesem je einen Text zu (?, ??) und geben Sie
den Text über h2,h3 Tags aus.
b. Wählen Sie je ein passendes Data-Prop für Name und Tanz-Stil (???, ????) und verwenden
Sie es für den Input und Select-Tag. Wenn Sie Namen und Tanz-Stil wählen, dann erscheint die
Auswahl im Teil "Anmeldung" (s. u
c. Optional: Stylen Sie die h2,h3, div (form) für die Eingabe und
div für die Anmeldung/Ausgabe (overview) so, dass ausschliesslich die
Styles der Komponente und nicht die Styles src/styles verwendet werden.
Überprüfen Sie die Ausgabe.
d. Optional: Weitere Input- und Ausgabefelder
-->
<template>
  <!--
   TwoWayBinding Using v-model
  -->
  <section>
    <div>
      <h2 :class="$style.title">{{ title }}</h2>
      <h3 :class="$style.subtitle">{{ subtitle }}</h3>
    </div>
    <div :class="$style.form">
      <label>
        Name: <input type="text" v-model="name" /><br>
        Telefon: <input type="text" v-model="phone" /><br>
        Email: <input type="text" v-model="email" />
      </label>
      <label>
        Preferred dance style
        <select name="dance_style" v-model="dance_style">
          <option value="Salsa_Puerto">Salsa Puerto</option>
          <option value="Salsa_Cubana">Salsa Cubana</option>
          <option value="Bachata">Bachata</option>
          <option value="Bachata_SG">Bachata Showgroup</option>
        </select>
      </label>
    </div>
    <div :class="$style.overview">
      <h3>Anmeldung</h3>
      <ul>
        <li>Name: {{ name }}</li>
        <li>Phone: {{ phone }}</li>
        <li>Email: {{ email }}</li>
        <li>Preference: {{ dance_style }}</li>
      </ul>
    </div>
    <button>Anmelden</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Latin Tanz-Kurs',
      subtitle: 'Juli 202x',
      name: '',
      phone: '',
      email: '',
      dance_style: ''
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
