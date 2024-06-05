<!--
Aufgabe: Ausgabe von Studenten-Daten
Erstellen Sie eine computed Data-Property ...
a. student(), welche den Vor- und Nachnamen des Studenten ausgibt.
b. anzahlModule(), welche die Anzahl der Module des Studenten ausgibt.
b. durchschnittModule(), welche den arithmetischen Durchschnitt aller abgeschlossener Module des Studenten ausgibt.
-->
<template>
  <div class="container">
    <!-- a.-->
    <p>{{student}}</p>
    <!-- b.-->
    <p>{{anzahlModule}}</p>
    <!-- c.-->
    <p>{{durchschnittModule}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schule: {
        beruf: {
          id: "Mediamatiker",
          jahre: 4,
          abschluss: "EFZ"
        },
        student: {
          name: {
            vorname: 'Hans',
            nachname: 'Muster'
          },
          module: [
            {
              M286: "Eigene ICT-Arbeitsinstrumente einrichten und bedienen",
              Note: 4.5,
              Semester: 1,
              abgeschlossen: true
            }, {
              M287: "Websites mit CSS gestalten",
              Note: 5,
              Semester: 2,
              abgeschlossen: true
            }, {
              M288: "Programmiertechniken im Webfrontend einsetzen",
              Note: 0,
              Semester: 3,
              abgeschlossen: false
            }, {
              M307: "Formulare entwickeln",
              Note: 5,
              Semester: 4,
              abgeschlossen: true
            }
          ]
        }
      }
    }
  },
  computed: {
    /* a. */
    student(){
      return `Name: ${this.schule.student.name.vorname} ${this.schule.student.name.nachname}`
    },
    /* b. */
    anzahlModule(){
      return `Anzahl Module: ${this.schule.student.module.length}`
    },
    /* c. */
    durchschnittModule(){
      let note=0.0;
      let teiler=0;
      this.schule.student.module.forEach(modul=>{
        if (modul.abgeschlossen){
          //note = note + modul.Note;
          note += modul.Note;
          teiler++;
        }
      })
      return `Notendurchschnitt von aktuell ${teiler} abgeschlossenen Module: ${(note/teiler).toFixed(2)}`
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
  color: red;
}
</style>
