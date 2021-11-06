<template>
    <div>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        max-height="80vh"
        src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/11/03193113/1.nocrop.w840.h1330.2x.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                  ]"
                  class="font-weight-black"
                >
                  MAXIMALIST
                </span>
              </v-col>
              <router-link :to="{ name: 'inspire' }">
                <v-btn class="align-self-end mx-2" light width="105">
                  Gallery
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'blog' }">
                <v-btn class="align-self-end mx-2" light width="105">
                  Blog
                </v-btn>
              </router-link>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </div>
</template>
