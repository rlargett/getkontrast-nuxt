<template lang="pug">
    <svg v-if="selected" class="h-8 w-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="radio-button-on"><g id="radio-button-on-2" data-name="radio-button-on"><path class="cls-2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path class="cls-2" d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></g></svg>
    <svg v-else class="h-8 w-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z" data-name="radio-button-off"/></g></svg>
</template>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
