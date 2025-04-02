<template>
    <div class="locations-container">
        <h1 class="locations-title">AED Locations</h1>

        <p class="locations-count">
            {{ locations.length }} locations available
        </p>

        <transition-group
            name="list-animation"
            tag="div"
            class="locations-list"
        >
            <AedCardCompact
                v-for="location of locations"
                :key="location.gid + location.icar_address_id"
                :location="location"
                class="location-card"
            />
        </transition-group>
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
.locations-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
}

.locations-title {
    font-size: 1.75rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 600;
}

.search-container {
    margin-bottom: 1.5rem;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
}

.search-input:focus {
    outline: none;
    border-color: #17a2b8;
    box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.15);
}

.locations-count {
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 1rem;
    text-align: right;
}

.locations-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.location-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.location-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
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
    .locations-container {
        padding: 1rem;
    }

    .locations-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .search-input {
        padding: 0.6rem 0.8rem;
    }
}
</style>
