<template>
  <section>
    <div>
      <vue-masonry-wall :items="data.imageCollection.items" :options="options">
        <template v-slot:default="{ item }">
          <div class="Item">
            <router-link :to="{ name: 'photo-id', params: { id: item.slug } }">
              <!-- <v-btn> {{ item.slug }} </v-btn> -->
              <img :src="item.photo.url" />
            </router-link>
          </div>
        </template>
      </vue-masonry-wall>
    </div>
  </section>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

import { gql } from "nuxt-graphql-request";

export default {
  components: { VueMasonryWall },
  data() {
    return {
      options: {
        width: 500,
        padding: {
          2: 0.1,
          default: 0.1,
        },
      },
    };
  },

  async asyncData({ $graphql, params, route }) {
    const query = gql`
      query {
        imageCollection {
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

    const data = await $graphql.default.request(query);
    return { data };
  },
};
</script>



<style scoped>
#app {
  min-height: 100vh;
}

.Item {
  overflow: hidden;
  border-radius: 0px;
  width: 100%;
  background: #363636;
}
.Content {
  padding: 10px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
}
</style>
