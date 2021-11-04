<template>
  <section>
    <div v-for="item in data.imageCollection.items" v-bind:key="item.items">
      <!-- {{ data.imageCollection.items }} -->
      {{ item.title }}
      {{ item.imageCaption }}
      {{ item.imageCredits }}
      <br />
      <img :src="item.photo.url" />
    </div>
  </section>
</template>

<script>
import { gql } from "nuxt-graphql-request";

export default {
  async asyncData({ $graphql, params, route }) {
    const query = gql`
      query ($slug: String) {
        imageCollection(where: { slug: $slug }) {
          items {
            title
            slug
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

    const veriables = { slug: route.params.id };
    const data = await $graphql.default.request(query, veriables);
    return { data };
  },
};
</script>


