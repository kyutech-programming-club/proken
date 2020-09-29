<template>
  <g-link :to="path">
      <h3>{{ title }}</h3>
  </g-link>
</template>

<script>
export default {
  props: {
    path: String,
    title: String
  }
}
</script>>