<template>
  <h2>Рик и Морти</h2>
    <div>
      <Button @click="fetchEpisodes" label="Эпизоды"/>
      <Button @click="fetchCharacters" label="Персонажи"/>
      <Button @click="fetchLocations" label="Локации"/>
    </div>
    <characters-list :characters="characters"/>
    <locations-list :locations="locations"/>
  <episodes-list :episodes="episodes"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CharactersList from './components/CharactersList.vue'
import LocationsList from './components/LocationsList.vue'
import EpisodesList from './components/EpisodesList.vue'
import axios from 'axios';

export default defineComponent({
  name:' App',
  components: {CharactersList, LocationsList, EpisodesList},
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
          const response = await axios.get('https://rickandmortyapi.com/api/episode')
          this.episodes = response.data.results
          console.table(response.data.results)
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
</style>
