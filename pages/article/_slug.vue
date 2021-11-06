<template>
  <v-app>
    <v-content class="text-center">
      <v-row
        justify="center"
        v-for="item in data.blogCollection.items"
        v-bind:key="item.items"
      >
        <div>
            <v-hover v-slot:default="{ hover }">
                <v-card width="100vh" class="ma-0" :elevation="hover ? 12 : 2" :to="{ name: 'article-slug', params: { slug: item.slug } }">
                    <v-list-item>
                    <v-img
                        class="ma-2"
                        :src="item.preview.url"
                        :aspect-ratio="16 / 9"
                        max-width="300px"
                    ></v-img>
                    <v-list-item-content>
                        <div class="overline mb-4">TYPE OF ARTICAL</div>
                        <v-list-item-title class="headline mb-1 blue--text">
                        {{ item.title }}
                        </v-list-item-title>
                        <v-list-item-title class="title mb-1">{{
                        item.textPreview
                        }}</v-list-item-title>
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
      query ($slug: String) {
        blogCollection(where: { slug: $slug }) {
          items {
            title
            slug
            date
            author
            textPreview
            textBody
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

    const veriables = { slug: route.params.slug };
    const data = await $graphql.default.request(query, veriables);
    return { data };
  },
};
</script>


