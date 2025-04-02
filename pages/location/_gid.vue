<template>
    <div class="detail-container">
        <div v-if="!location" class="loading-state">
            <div class="spinner"></div>
            <p class="loading-text">Loading location details...</p>
        </div>

        <div v-else class="detail-content">
            <div class="back-navigation">
                <router-link to="/" class="back-link">
                    <span class="back-icon">←</span> Back to locations
                </router-link>
            </div>

            <h1 class="detail-title">Location Details</h1>

            <div class="detail-card">
                <AedCardDetailed :location="location" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: {
        ...mapGetters(['getLocationByGid', 'getLocationFavoriteByGid']),
        location() {
            return this.$store.getters.getLocationByGid(this.$route.params.gid)
        },
        isFavorite() {
            return this.$store.getters.getLocationFavoriteByGid(
                this.$route.params.gid
            )
        },
        getDirectionsUrl() {
            if (!this.location?.latitude || !this.location?.longitude)
                return '#'
            return `https://www.google.com/maps/dir/?api=1&destination=${this.location.latitude},${this.location.longitude}`
        },
    },
    methods: {
        toggleFavorite() {
            this.$store.commit('toggleFavorite', this.$route.params.gid)
        },
    },
})
</script>

<style scoped>
.detail-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
}

.loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(23, 162, 184, 0.2);
    border-radius: 50%;
    border-top-color: #17a2b8;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading-text {
    color: #6c757d;
    font-size: 1rem;
}

.back-navigation {
    margin-bottom: 1.5rem;
}

.back-link {
    display: inline-flex;
    align-items: center;
    color: #17a2b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.back-link:hover {
    color: #138496;
}

.back-icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
}

.detail-title {
    font-size: 1.75rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.detail-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
    .detail-container {
        padding: 1rem;
    }

    .detail-title {
        font-size: 1.5rem;
    }
}
</style>
