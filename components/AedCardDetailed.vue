<template>
    <div class="aed-location-page">
        <!-- Page Header -->
        <div class="page-header">
            <b-container>
                <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                >
                    <div class="header-left">
                        <div class="d-flex align-items-center">
                            <div
                                class="status-indicator mr-3"
                                :class="{ 'bg-success': true }"
                            ></div>
                            <h2 class="mb-0">{{ location.provider }}</h2>
                        </div>
                        <div class="text-muted mt-2">
                            AED ID: {{ location.gid }}
                        </div>
                    </div>
                    <div class="header-right mt-3 mt-md-0">
                        <FavoriteButton :gid="location.gid" />
                        <b-badge pill variant="success" class="status-badge">
                            Active
                        </b-badge>
                    </div>
                </div>
            </b-container>
        </div>

        <!-- Page Content -->
        <b-container class="page-content">
            <b-row>
                <!-- Main Content -->
                <b-col lg="8">
                    <!-- Location Section -->
                    <div class="content-section">
                        <div class="section-header">
                            <b-icon
                                icon="geo-alt-fill"
                                class="section-icon"
                            ></b-icon>
                            <h4 class="section-title">Location Information</h4>
                        </div>

                        <b-row>
                            <b-col md="6">
                                <div class="info-group">
                                    <label class="info-label">Address</label>
                                    <div class="info-value">
                                        {{ fullAddress }}
                                    </div>
                                </div>

                                <div class="info-group" v-if="location.floor">
                                    <label class="info-label">Floor</label>
                                    <div class="info-value">
                                        {{ location.floor }}
                                    </div>
                                </div>
                            </b-col>

                            <b-col md="6">
                                <div class="info-group">
                                    <label class="info-label">City</label>
                                    <div class="info-value">
                                        {{ location.city }}
                                    </div>
                                </div>

                                <div class="info-group">
                                    <label class="info-label"
                                        >Postal Code</label
                                    >
                                    <div class="info-value">
                                        {{ location.postal_code }}
                                    </div>
                                </div>
                            </b-col>
                        </b-row>

                        <div class="coordinates-box mt-3">
                            <div class="d-flex align-items-center">
                                <b-icon
                                    icon="pin-map-fill"
                                    class="mr-2 text-secondary"
                                ></b-icon>
                                <label class="mb-0">Coordinates</label>
                            </div>
                            <code class="coordinates-value">{{
                                formatCoordinates
                            }}</code>
                        </div>
                    </div>

                    <!-- Additional Details Section -->
                    <div
                        class="content-section"
                        v-if="location.additional_details"
                    >
                        <div class="section-header">
                            <b-icon
                                icon="info-circle-fill"
                                class="section-icon"
                            ></b-icon>
                            <h4 class="section-title">
                                Additional Information
                            </h4>
                        </div>
                        <p class="additional-details">
                            {{ location.additional_details }}
                        </p>
                    </div>
                </b-col>

                <!-- Sidebar -->
                <b-col lg="4">
                    <!-- Reference Data Section -->
                    <div class="sidebar-section">
                        <div class="section-header">
                            <b-icon
                                icon="card-list"
                                class="section-icon"
                            ></b-icon>
                            <h5 class="section-title">Reference Data</h5>
                        </div>

                        <ul class="reference-list">
                            <li class="reference-item">
                                <span class="reference-label">Street Code</span>
                                <span class="reference-value">{{
                                    location.street_code
                                }}</span>
                            </li>
                            <li class="reference-item">
                                <span class="reference-label"
                                    >ICAR Address ID</span
                                >
                                <span class="reference-value">{{
                                    location.icar_address_id
                                }}</span>
                            </li>
                            <li class="reference-item">
                                <span class="reference-label"
                                    >ICAR Street ID</span
                                >
                                <span class="reference-value">{{
                                    location.icar_street_id
                                }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Timeline Section -->
                    <div class="sidebar-section">
                        <div class="section-header">
                            <b-icon icon="map" class="section-icon"></b-icon>
                            <h5 class="section-title">Map</h5>
                        </div>

                        <div class="map-viewer">
                            <MapViewer />
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AedLocation } from '~/types'
import FavoriteButton from './FavoriteButton.vue'

export default defineComponent({
    props: {
        location: {
            type: Object as PropType<AedLocation>,
            required: true,
        },
    },
    computed: {
        fullAddress(): string {
            const { street_name, house_number } = this.location
            return `${street_name} ${house_number}`
        },
        formatCoordinates(): string {
            const { lat, lon } = this.location.geo_point_2d
            return `${lat.toFixed(6)}, ${lon.toFixed(6)}`
        },
    },
})
</script>

<style scoped>
.aed-location-page {
    background-color: #f8f9fa;
    min-height: 100vh;
}

.page-header {
    background-color: #ffffff;
    padding: 2rem 0;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-right {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.status-indicator {
    width: 16px;
    height: 16px;
    border-radius: 50%;
}

.status-badge {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
}

.page-content {
    padding-bottom: 3rem;
}

.content-section,
.sidebar-section {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #f0f0f0;
}

.section-icon {
    color: #28a745;
    margin-right: 0.8rem;
    font-size: 1.2rem;
}

.section-title {
    margin: 0;
    font-weight: 600;
    color: #343a40;
}

.info-group {
    margin-bottom: 1.2rem;
}

.info-label {
    display: block;
    color: #6c757d;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
}

.info-value {
    font-weight: 500;
}

.coordinates-box {
    background-color: #f8f9fa;
    border-radius: 6px;
    padding: 1rem;
    border: 1px solid #e9ecef;
}

.coordinates-value {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    background-color: #ffffff;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #e9ecef;
}

.additional-details {
    line-height: 1.6;
    color: #495057;
}

.reference-list,
.map-viewer {
    list-style: none;
    padding: 0;
    margin: 0;
}

.reference-item,
.map-viewer {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
}

.map-viewer {
    height: 16rem;
}

.reference-item:last-child {
    border-bottom: none;
}

.reference-label {
    color: #6c757d;
    font-size: 0.9rem;
}

.reference-value {
    font-weight: 500;
    text-align: right;
}

@media (max-width: 767.98px) {
    .page-header {
        padding: 1.5rem 0;
    }

    .reference-item {
        flex-direction: column;
    }

    .reference-value {
        text-align: left;
        margin-top: 0.3rem;
    }
}
</style>
