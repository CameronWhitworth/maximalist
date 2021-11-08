<template>
  <v-app>
    <section id="blog">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">MAXIMALIST ARTICALS</h2>

          </v-container>
        </section>
    <v-content class="text-center">
      <v-row
        justify="center"
        v-for="item in data.blogCollection.items"
        v-bind:key="item.items"
      >
        <div>
          <v-hover v-slot:default="{ hover }">
            <v-card
              width="100vh"
              class="ma-1"
              color="transparent"
              :elevation="hover ? 5 : 0"
              :to="{ name: 'article-slug', params: { slug: item.slug } }"
            >
              <v-list-item>
                <v-img
                  class="ma-3"
                  :src="item.preview.url"
                  :aspect-ratio="16 / 9"
                  max-width="300px"
                ></v-img>
                <v-list-item-content>
                  <!-- <div class="overline mb-4">MAXIMALIST ARTICAL</div> --> 
                  <v-list-item-title class="headline mb-1 blue--text">
                    <h1 class="text-uppercase font-weight-bold" >{{ item.title }}</h1>
                  </v-list-item-title>
                  <v-list-item-title class="title mb-1">
                    {{ item.textPreview }}
                  </v-list-item-title>
                  <div>{{ item.textPreview }}</div>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
        </div>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import { gql } from "nuxt-graphql-request";

export default {
  data: () => ({
    overlay: false,
    opacity: 0.5,
  }),
  async asyncData({ $graphql, params, route }) {
    const query = gql`
      query {
        blogCollection {
          items {
            title
            slug
            date
            textPreview
            preview {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
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


