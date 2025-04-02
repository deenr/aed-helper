<template>
    <div>
        <div class="back-navigation">
            <router-link to="/" class="back-link">
                <span class="back-icon">←</span> Go back
            </router-link>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.back-navigation {
    margin: 1.5rem auto;
    padding: 0 1.5rem;
    max-width: 800px;
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
</style>
