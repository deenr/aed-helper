<template>
    <div class="container favorites-container">
        <h1 class="favorites-title">My Favorite Locations</h1>

        <div v-if="getFavoriteLocations().length === 0" class="empty-state">
            <i class="fas fa-heart-broken empty-icon"></i>
            <p class="empty-message">
                You haven't saved any favorite locations yet.
            </p>
            <router-link to="/" class="explore-link"
                >Explore locations</router-link
            >
        </div>

        <AedCardCompact
            v-for="location of getFavoriteLocations()"
            :key="location.gid + location.icar_address_id"
            :location="location"
            class="favorite-card"
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
.favorites-container {
    padding: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
}

.favorites-title {
    font-size: 1.75rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 600;
}

.favorites-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.favorite-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.favorite-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
}

.empty-icon {
    font-size: 3rem;
    color: #6c757d;
    margin-bottom: 1rem;
}

.empty-message {
    font-size: 1.1rem;
    color: #495057;
    margin-bottom: 1.5rem;
}

.explore-link {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background-color: #17a2b8;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.explore-link:hover {
    background-color: #138496;
    text-decoration: none;
    color: white;
}

/* List animation */
.list-animation-enter-active,
.list-animation-leave-active {
    transition: all 0.3s;
}

.list-animation-enter-from,
.list-animation-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

@media (max-width: 768px) {
    .favorites-container {
        padding: 1rem;
    }

    .favorites-title {
        font-size: 1.5rem;
    }

    .empty-state {
        padding: 2rem 1rem;
    }
}
</style>
