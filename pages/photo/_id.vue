<template>
  <v-app>
      <v-content class="text-center">
        <section>
            <div v-for="item in data.imageCollection.items" v-bind:key="item.items">
            <!-- {{ data.imageCollection.items }} -->            
            <img :src="item.photo.url" />
            <br />
            {{ item.title }}
            {{ item.imageCaption }}
            {{ item.imageCredits }}
          </div>
        </section>
      </v-content>
  </v-app>
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


