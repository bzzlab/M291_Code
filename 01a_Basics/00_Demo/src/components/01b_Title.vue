<template>
   <div>
     <h1>{{title}}</h1>
     <h2><u>{{subtitle}}</u></h2>
   </div>
</template>
<script>
export default {
  data(){
    return {
      title: 'Willkommen im Modul 291!',
      subtitle: 'Programmierung mit einem Frontend-Framework'
    }
  }
}
</script>

<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;
}
h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: red;
  margin-top: 60px;
}


</style>
