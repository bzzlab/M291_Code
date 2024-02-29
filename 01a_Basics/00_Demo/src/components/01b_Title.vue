<template>
   <div>
     <h1>{{title}}</h1>
     <h2>{{subtitle}}</h2>
   </div>
</template>
<script>
export default {
  data(){
    return {
      title: 'Meine erste Titel-Komponente (01_Title.vue)!',
      subtitle: 'Hier kommt der Untertitel.'
    }
  }
}
</script>

<style>
h1,h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
