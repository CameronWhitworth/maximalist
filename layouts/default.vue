<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar color="grey" size="40"> CW </v-avatar>
    </v-app-bar>
    <v-main>
      <!-- <v-container> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <!-- <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Cameron Whitworth
      </div>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-post",
          title: "Articals",
          to: "/blog",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Maximalist",
    };
  },
};
</script>
