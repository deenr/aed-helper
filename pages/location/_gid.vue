<template>
    <div class="container list">
        <AedCardDetailed :location="location" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        location() {
            return this.$store.getters.getLocationByGid(this.$route.params.gid)
        },
    },
})
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
