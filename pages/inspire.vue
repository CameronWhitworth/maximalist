<template>
  <div>
    <h1>Images</h1>
    
    <div v-for="item in data.imageCollection.items" :key="item.title">
      <h2> {{item.imageCaption}} </h2>
      <v-img
      :src= item.photo.url
      > </v-img>
      <!-- <pre>
        {{ item }}
      </pre> -->
    </div>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

export default {
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        imageCollection {
          items {
            title
            photo {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            imageCaption
            imageCredits
          }
        }
      }
    `;

    const data = await $graphql.default.request(query);
    return { data }
  },
};
</script>

