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
        <v-toolbar-title>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <g-link to="/">Home</g-link>
            <g-link to="/news/">News</g-link>
            <g-link to="/products">Products</g-link>
        </v-toolbar-items>
    </v-app-bar>
    <slot />
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

