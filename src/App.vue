<template>
  <h2>Рик и Морти</h2>
  <button @click="fetchCharacters">
    Персонажи
  </button>
  <button @click="fetchEpisodes"
    disabled
  >
    Эпизоды
  </button>
  <button @click="fetchLocations">
    Локации
  </button>
  <characters-list :characters="characters"/>
  <locations-list :locations="locations"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CharactersList from './components/CharactersList.vue'
import LocationsList from './components/LocationsList.vue'
import axios from 'axios';

export default defineComponent({
  name:' App',
  components: {CharactersList, LocationsList},
  data() {
    return {
      characters: [],
      episodes: [],
      locations: [],
    }
  },
  methods: {
      async fetchCharacters() {
        if (this.characters.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          this.characters = response.data.results
        }
      },
      async fetchEpisodes() {
        if (this.episodes.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          this.characters = response.data.results
        }
      },
      async fetchLocations() {
        if (this.locations.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/location')
          this.locations = response.data.results
          console.table(response.data.results)
        }
      },
  }
})
</script>


<style>
.List {
  display: flex;
  flex-wrap: wrap;
}
.Item{
    width: min(90%, 400px);
    margin: 10px auto;
}
#Item__Image {
    display: flex;
    margin: auto;
}
</style>
