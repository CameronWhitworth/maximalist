<template>
    <section>
      <div>
        <vue-masonry-wall :items="data.imageCollection.items" :options="options">
          <template v-slot:default="{ item }">
            <div class="Item">
              <img :src="item.photo.url" />

              <!-- <div class="Content">
                    <h5 class="text-ellipsis-1l">{{ item.title }}</h5>
                    <p class="text-ellipsis-2l">{{ item.imageCaption }}</p>
                  </div> -->
            </div>
          </template>
        </vue-masonry-wall>
      </div>
    </section>

    <!-- <div>
      <v-container
        <v-row>
          <v-col v-for="item in data.imageCollection.items" :key="item.id" class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
            <v-img :src="item.photo.url"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <h1>Images</h1>
      
      <div v-for="item in data.imageCollection.items" :key="item.title">
        <h2> {{item.imageCaption}} </h2>
        <v-img
        :src= item.photo.url
        > </v-img>
        <pre>
          {{ item }}
        </pre>
      </div>
    </div> -->
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
