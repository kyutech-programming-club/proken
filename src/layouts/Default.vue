<!--ホームページに表示されるボタン達。指定することで引っ張ってくるのかも-->

<template>
<div class="layout">
    <header class="header">
        <strong>
            <g-image alt="proken image" src="~/logo.png" width="60" />
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/news/">News</g-link>
            <g-link class="nav__link" to="/term">Term</g-link>
        </nav>
    </header>
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

