<template>
    <b-card class="aed-compact-card h-100 shadow-sm">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center mb-2">
                <div
                    class="status-indicator mr-2"
                    :class="{ 'bg-success': true }"
                ></div>

                <NuxtLink :to="`location/${location.gid}`">
                    <h6 class="mb-0 text-truncate">{{ location.provider }}</h6>
                </NuxtLink>
            </div>

            <FavoriteButton :gid="location.gid" />
        </div>

        <div class="location-info mb-2">
            <b-icon
                icon="house-door"
                class="text-secondary mr-1"
                scale="0.8"
            ></b-icon>
            <small class="text-muted text-truncate">{{ address }}</small>
        </div>

        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <b-icon
                    icon="geo-alt"
                    class="text-secondary mr-1"
                    scale="0.8"
                ></b-icon>
                <small class="text-monospace">{{ formatCoordinates }}</small>
            </div>
            <b-badge variant="light" class="id-badge">
                {{ location.gid }}
            </b-badge>
        </div>
    </b-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AedLocation } from '~/types'

export default defineComponent({
    props: {
        location: {
            type: Object as PropType<AedLocation>,
            required: true,
        },
    },
    computed: {
        address(): string {
            const { street_name, house_number, city } = this.location
            return `${street_name} ${house_number}, ${city}`
        },
        formatCoordinates(): string {
            const { lat, lon } = this.location.geo_point_2d
            return `${lat.toFixed(4)}, ${lon.toFixed(4)}`
        },
    },
})
</script>

<style scoped>
.aed-compact-card {
    transition: transform 0.2s ease;
    border-radius: 8px;
    overflow: hidden;
}

.aed-compact-card:hover {
    transform: translateY(-3px);
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.id-badge {
    font-size: 0.7rem;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    color: #6c757d;
}

.location-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
