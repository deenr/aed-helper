<template>
    <div class="container list">
        <div v-if="getFavoriteLocations().length === 0" class="empty-state">
            No favorite locations yet.
        </div>
        <AedCardCompact
            v-else
            v-for="location of getFavoriteLocations()"
            :key="location.gid + location.icar_address_id"
            :location="location"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    layout: 'no-nav',
    computed: {
        ...mapGetters(['getFavoriteLocations']),
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
