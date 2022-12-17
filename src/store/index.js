import { createStore } from "vuex";

export default createStore({
    state: {
        currentList: [],
        currentListName: 'А теперь сработает?',
        characters: [],
        episodes: [],
        locations: [],
    },
    mutations: {
        async getData (state) {
            let response 
            response = await axios.get('https://rickandmortyapi.com/api/character')
            state.characters = response.data.results
            response = await axios.get('https://rickandmortyapi.com/api/episode')
            state.episodes = response.data.results
            response = await axios.get('https://rickandmortyapi.com/api/location')
            state.locations = response.data.results
        }
    }
})