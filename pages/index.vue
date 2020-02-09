<template lang="pug">
div
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
                bullet(@click.native="showSlide" :selected="!selected" class="mx-1")
            span(class="cursor-pointer")
                bullet(@click.native="showSlide" :selected="selected" class="mx-1")

    div(class="flex justify-center mb-8")
        a(class="irony-button text-lg no-underline bg-red-light hover:bg-white text-white hover:text-red-light font-bold py-4 px-4 border border-solid border-grey-light hover:border-red-light rounded shadow hover:shadow-lg outline-none cursor-pointer" href="https://gum.co/kontrast" target="_blank")
            <svg class="w-6 h-6 mr-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            span Buy for $4.99

    div(class="text-center mb-8")
        h2 or try the free version:
        a(href="https://chrome.google.com/webstore/detail/haphaaenepedkjngghandlmhfillnhjk/" target="_blank")
            chrome(class="zoom w-16 h-16 mr-8 inline")
        a(href="https://addons.mozilla.org/en-US/firefox/addon/getkontrast/" target="_blank")
            firefox(class="zoom w-16 h-16 inline")

    //- div(class="bg-black text-white max-w-xl py-8 mb-10 -mx-4 sm:mx-auto")
    div(class="bg-black text-white max-w-xl py-8 -mx-4 sm:mx-auto")
        div(class="px-4 sm:px-10")
            h1(class="mt-0 text-red-light text-3xl font-semibold") You Can Make This App Better
            p(class="text-xl") I worked hard to make this app possible and better. However, I believe there still are rooms for improvement. Together we can improve this app. Whether you want a feature, found a bug, or just saying hi, I'd love to hear your feedback.😄

            form(class="w-full mt-16" action="https://getsimpleform.com/messages?form_api_token=bb153a91ad0e800f29406eff5025f997" method="post")
                //- input(type='hidden' name='redirect_to' value='/')
                div(class="flex flex-wrap -mx-3 mb-6")
                    div(class="w-full md:w-1/2 px-3 mb-6 md:mb-0")
                        label(class="block uppercase tracking-wide text-xs font-bold mb-2" for="name") Name
                        input(
                            class="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            required
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                        )
                    div(class="w-full md:w-1/2 px-3 mb-6")
                        label(class="block uppercase tracking-wide text-xs font-bold mb-2" for="email") Email
                        input(
                            class="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                            id="email"
                            name="email"
                            :required="subscribe"
                            placeholder="Email"
                            pattern="\S+@\S+\.\S+"
                            type="email"
                        )

                        label(for="contact")
                            input(type="hidden" name="contact" value="No")
                            input(class="mr-2 leading-tight"
                                type="checkbox"
                                name="contact"
                                v-model="subscribe"
                                value="Yes"
                            )
                            span(class="text-sm italic") Let me know if you release new product
                div(class="flex flex-wrap -mx-3 mb-6")
                    div(class="w-full px-3")
                        label(class="block uppercase tracking-wide text-xs font-bold mb-2" for="message") Message
                        textarea(
                            class="min-h-32 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                            required
                            id="message"
                            name="message"
                            type="text"
                        )
                div(class="w-full text-right")
                    button(
                        type='submit'
                        class='irony-button bg-red-light hover:bg-white text-white hover:text-red-light font-bold py-4 px-4 border border-solid border-transparent hover:border-red-light rounded shadow hover:shadow-lg outline-none cursor-pointer'
                    )
                        svg(class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
                            line(x1="22" y1="2" x2="11" y2="13")
                            polygon(points="22 2 15 22 11 13 2 9 22 2")
                        span Submit

</template>

<script>
import bullet from '@/components/bullet'
import chrome from '@/components/chrome'
import firefox from '@/components/firefox'
export default {
    components: {
        bullet,
        chrome,
        firefox,
    },
    data() {
        return {
            isSlideVisible: true,
            selected: false,
            subscribe: false,
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
