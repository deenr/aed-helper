<template>
    <div class="container list">
        <AedCardCompact
            v-for="location of locations"
            :key="location.gid + location.icar_address_id"
            :location="location"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        locations() {
            return this.$store.state.locations
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
