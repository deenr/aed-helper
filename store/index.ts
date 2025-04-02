import { AED_LOCATIONS } from '~/assets/data'
import { AedLocation } from '~/types'

interface State {
    locations: AedLocation[]
    favorites: string[]
}

export const state = (): State => ({
    locations: AED_LOCATIONS,
    favorites: [],
})

export const mutations = {
    toggleFavorite(state: State, gid: string) {
        const index = state.favorites.indexOf(gid)
        if (index === -1) {
            state.favorites.push(gid)
        } else {
            state.favorites.splice(index, 1)
        }
    },
}

export const getters = {
    getLocationByGid: (state: State) => (gid: string) => {
        return state.locations.find((location) => location.gid === gid)
    },
    getLocationFavoriteByGid: (state: State) => (gid: string) => {
        return state.favorites.includes(gid)
    },
    getFavoriteLocations: (state: State) => () => {
        return state.locations.filter((location) =>
            state.favorites.includes(location.gid)
        )
    },
}
