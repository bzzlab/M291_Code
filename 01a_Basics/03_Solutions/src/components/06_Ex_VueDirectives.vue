<!--
Aufgabe: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
a. Wählen Sie je ein Data-Prop für die Directives v-text, v-html, v-bind
Überprüfen Sie die Ausgabe.
-->
<template>
  <div class="output">
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <a
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
  </div>
</template>

<script>
export default {// v-bind

  data() {
    return {
      // v-text
      mytext: '05b_VueDirectives.vue (text)',
      // v-html
      myhtml: 'demo-5a </br>HTML in<br/><b>your data</b>',
      link: {
        url: 'https://www.bzz.ch',
        target: '_blank',
        tabindex: '0',
        title: 'Hier zur BZZ Webseite'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.output{
  margin: 5vw;
}
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
