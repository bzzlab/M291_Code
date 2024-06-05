<!--
  Outputting complex information into the Vue template
-->
<template>
  <div class="container">
    <p>Name: {{ fullName }}</p>
    <p>Totale Einträge: {{ totalPosts }}</p>
    <p v-html="publicPosts"></p>
    <div v-for="post in publicPostsV2" :key="post">
      <span v-html="post.Titel"></span>
      <span v-html="post.Inhalt"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      post: {
        fields: {
          author: {
            firstName: 'Hans',
            lastName: 'Muster'
          },
          entries: [
            {
              title: '<h3>Post-1</h3>',
              content: '<p>This is my 1st post to this topic: A lot of blabla</p>',
              private: false
            }, {
              title: '<h3>Post-2</h3>',
              content: '<p>This is my <u>2nd post</u> to this topic: A lot of blabla</p>',
              private: false
            }
          ]
        }
      }
    }
  },
  computed: {
    fullName() {
      return `Ich heisse ${this.post.fields.author.firstName}
      ${this.post.fields.author.lastName}.`
    },
    totalPosts() {
      return this.post.fields.entries.length;
    },
    publicPosts() {
      let posts = []
      this.post.fields.entries.filter(entry => {
        if (!entry.private) {
          posts.push(`${entry.title} ${entry.content}`);
        }
      })
      return posts.toString();
    },
    publicPostsV2() {
      let posts = []
      this.post.fields.entries.filter(entry => {
        if (!entry.private) {
          posts.push({'Titel': entry.title, 'Inhalt': entry.content});
        }
      })
      return posts;
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
