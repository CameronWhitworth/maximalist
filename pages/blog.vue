<template>
  <v-app>
    <v-content class="text-left">
      <!-- <v-container class="text-left">
        <v-row justify="center">
          <v-card width="100vh" class="ma-1" color="transparent" flat>
            <h2 class="display-2 font-weight-bold ma-5">Featured</h2>
            <v-divider class="mb-1"></v-divider>
          </v-card>
        </v-row>
      </v-container> -->
      <v-container
        v-for="item in data.blogCollection.items"
        v-bind:key="item.items"
      >
        <v-row justify="center" v-if="item.showcase === true">
          <div>
            <v-hover v-slot:default="{ hover }">
              <v-card
                width="100vh"
                class="ma-1"
                color="transparent"
                :elevation="hover ? 5 : 0"
                :to="{ name: 'article-slug', params: { slug: item.slug } }"
              >
                <v-list-item >
                  <v-img
                    class="ma-3"
                    :src="item.preview.url"
                    :aspect-ratio="4 / 3"
                    width="300px"
                  ></v-img>
                  <v-list-item-content class="mx-3">
                    <div class="overline mb-4">{{ item.type }}</div>
                    <v-list-item-title class="text-wrap headline mb-1 blue--text">
                      <h2 class="text-uppercase font-weight-bold">
                        {{ item.title }}
                      </h2>
                    </v-list-item-title>
                    <v-list-item-title class="text-wrap title mb-2">
                      {{ item.textPreview }}
                    </v-list-item-title>
                    <div>By {{ item.author }}</div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
        </v-row>
      </v-container>

      <v-container class="text-left">
        <v-row justify="center">
          <v-card width="100vh" class="ma-1" color="transparent" flat>
            <h2 class="display-2 font-weight-bold ma-5">LATEST ARTICALS</h2>
          </v-card>
        </v-row>
      </v-container>
      <v-row
        justify="center"
        v-for="item in data.blogCollection.items"
        v-bind:key="item.items"
      >
        <div>
          <v-divider class="mb-1"></v-divider>
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
                <v-list-item-content class="mx-3">
                  <div class="overline mb-2">{{ item.type }}</div>
                  <v-list-item-title class="text-wrap headline mb-1 blue--text">
                    <h2 class="text-uppercase font-weight-bold">
                      {{ item.title }}
                    </h2>
                  </v-list-item-title>
                  <v-list-item-title class="text-wrap title mb-2">
                    {{ item.textPreview }}
                  </v-list-item-title>
                  <div class="subtitle">By {{ item.author }}</div>
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
            author
            type
            showcase
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


