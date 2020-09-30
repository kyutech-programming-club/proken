<template>
<g-link :to="data.path">
    <h3>{{ data.title }}</h3>
</g-link>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>>
