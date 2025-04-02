<template>
    <div>
        <b-button
            pill
            class="favorite-button"
            @click="
                () => {
                    toggleFavorite(gid)
                }
            "
        >
            <b-icon
                :icon="isFavorite ? 'heart-fill' : 'heart'"
                class="favorite-icon"
            ></b-icon>
        </b-button>
    </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        gid: {
            type: String,
            required: true,
        },
    },
    computed: {
        isFavorite() {
            return this.$store.getters.getLocationFavoriteByGid(this.gid)
        },
    },
    methods: {
        ...mapMutations(['toggleFavorite']),
    },
})
</script>

<style scoped>
.favorite-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}

.favorite-icon {
    width: 0.9rem;
    height: 0.9rem;
}
</style>
