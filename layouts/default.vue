<template lang="pug">
  div(class="font-hack leading-normal text-black bg-grey-lighter antialiased")
    topBar
    nuxt
</template>

<script>
import topBar from '@/components/topBar'

export default {
    components: {
        topBar,
    },
}
</script>

<style></style>
