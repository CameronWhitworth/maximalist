<template>
  <v-app>
    <v-content class="text-center">
      <v-row justify="center">
          <div
            v-for="item in data.imageCollection.items"
            v-bind:key="item.items"
          >
            <!-- {{ data.imageCollection.items }} -->
            <v-hover>
              <v-img
                :src="item.photo.url"
                class="my-2"
                max-height="100vh"
                max-width="100vh"
                contain
                @click="overlay = true"
              >
                <v-row justify="end">
                  <v-btn
                    color="grey"
                    class="ma-4"
                    fab
                    dark
                    small
                    plain
                    @click="overlay = true"
                  >
                    <v-icon dark> mdi-fullscreen </v-icon>
                  </v-btn>
                </v-row>
              </v-img>
            </v-hover>
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
            <h2 class="display-2 font-weight-bold mb-3 text-center text-uppercase"
            >{{ item.title }}
            </h2>
            <p>{{ item.imageCaption }}</p>
            <p>{{ item.imageCredits }}</p>

            <v-overlay :value="overlay" :opacity="opacity">
              <v-img
                :src="item.photo.url"
                max-height="95vh"
                min-height="90vh"
                min-width="50vh"
                contain
                @click="overlay = false"
              />
            </v-overlay>
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


