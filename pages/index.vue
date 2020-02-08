<template lang="pug">
    div(class="relative max-w-xl w-full mx-auto mt-8 mb-12")
        div(class='shadow-lg')
            img(class="w-full" src="/mockup.png" alt="mockup")
            div
                div#player(v-if="isSlideVisible")
                    video(
                        class="w-full rounded-b"
                        autoplay
                        controls
                        controlsList="nodownload"
                        loop
                        muted
                        preload="metadata"
                        src="/kontrast-demo.mp4" type="video/mp4"
                    ) Sorry, your browser doesn't support embedded videos.
                div(v-else)
                    div(class="responsive-iframe-container")
                        iframe(class="rounded-b" src="https://www.youtube.com/embed/FcEyCwNmcfU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        div(class="mt-4 text-2xl text-red-light text-center")
            span(class="cursor-pointer mb-8")
                bullet(@click.native="showSlide" :selected="selected" class="mx-1")
            span(class="cursor-pointer")
                bullet(@click.native="showSlide" :selected="!selected" class="mx-1")

</template>

<script>
import bullet from '@/components/bullet'
export default {
    components: {
        bullet,
    },
    data() {
        return {
            isSlideVisible: true,
            selected: true,
        }
    },
    methods: {
        showSlide() {
            this.isSlideVisible = !this.isSlideVisible
            this.selected = !this.selected
        },
    },
}
</script>
