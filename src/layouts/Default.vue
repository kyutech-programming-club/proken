<!--ホームページに表示されるボタン達。指定することで引っ張ってくるのかも-->

<template>
<div>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>
    <v-app-bar
      prominent
    >
        <v-avatar>
            <g-image alt="proken image" src="~/logo.png" width="60" />
        </v-avatar>
        <strong>
        <v-toolbar-title>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </v-toolbar-title>
        </strong>
        <v-spacer />
        <strong>
        <v-toolbar-items>
            <g-link to="/">Home</g-link>
            <g-link to="/news/">News</g-link>
            <g-link to="/products">Products</g-link>
        </v-toolbar-items>
        </strong>
    </v-app-bar>

    <v-container>
      <v-row 
        dense
        align="center"
      >
        <v-col cols="12">
          <slot />
        </v-col>
      </v-row>
    </v-container>

    <v-footer>
      <v-card
        flat
        tile
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="link_data in linkData"
            :key=link_data.link
            class="mx-4 white--text"
            icon
            :href="link_data.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ link_data.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <strong>プロ研216</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    data: () => ({
      linkData: [
        { icon : 'mdi-github', link : "https://github.com/kyutech-programming-club" },
        { icon : 'mdi-twitter', link : "https://twitter.com/kyutech_proken" },
        { icon : 'mdi-youtube', link : "https://www.youtube.com/channel/UCYQ_Lz2h6cTaRBFf2KH6BYw" }
      ],
    }),
  }
</script>

