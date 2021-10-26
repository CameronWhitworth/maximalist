<script>
import { gql } from "nuxt-graphql-request";

// In store
export default {
  async asyncData({ $graphql, params }) {
    console.log('testing');
    const query = gql`
      query {
        imageCollection {
          items {
            title
            imageCaption
            imageCredits
          }
        }
      }
    `;

    const planets = await this.$graphql.default.request(query);
    //commit('SET_PLANETS', planets);
    console.log(planets.imageCollection);
    console.log('testing');
    return { planets }
  },
};
</script>