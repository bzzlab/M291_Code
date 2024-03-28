<!--
Aufgabe: Data-Props als Array und einfaches Stylen
a. Wählen Sie je ein Data-Prop, weisen Sie diesem je einen Text zu (?, ??) und geben Sie
den Text über h1,h2 Tags aus.
b. Wählen Sie zusätzlich ein Data-Prop als Array mit 4 Texteinträgen (???)
und geben Sie den Text über das ul-Tag als List-Items aus.
c. Stylen Sie nach Ihrem Ermessen die Ausgaben in den Aufgaben a. + b. (s. unten Bereich <style>)
-->
<template>
  <div>
    <h1>{{ereignis}}</h1>
    <h2>{{aktion}}</h2>
    <ul>
      <li>{{marken[0]}}</li>
      <li>{{marken[1]}}</li>
      <li>{{marken[2]}}</li>
      <li>{{marken[3]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ereignis: 'Black-Tuesday Sales', //?
      aktion: 'Dancing-Shoes', //??
      marken: ['Nike','Adidas', 'Puma', 'Diamond']//???
    }
  },
}
</script>

<style lang="scss" scoped>
//Here is the import
@import '../styles/typography';

h1 {
  //?
}
h2 {
  //??
}
ul > li {
  //???
}

</style>
