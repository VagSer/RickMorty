<template>
  <h2>Рик и Морти</h2>
    <div>
      <Button @click="fetchEpisodes" label="Эпизоды"/>
      <Button @click="fetchCharacters" label="Персонажи"/>
      <Button @click="fetchLocations" label="Локации"/>
    </div>
    <button @click="showSelected">
      Показать модальное окно
    </button>
    <selected-item v-model:isVisible="isSomethingSelected">

    </selected-item>
    <currentList 
      :currentListName="currentListName" 
      :currentList="currentList"
    />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CurrentList from './components/CurrentList.vue'
import SelectedItem from './components/SelectedItem.vue';
import axios from 'axios';

export default defineComponent({
  name:' App',
  components: {CurrentList, SelectedItem},
  data() {
    return {
      isSomethingSelected: false,
      currentList: [],
      currentListName: '',
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
        this.currentListName = 'characters'
        this.currentList = [...this.characters]
      },
      async fetchEpisodes() {
        if (this.episodes.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/episode')
          this.episodes = response.data.results
        }
        this.currentListName = 'episodes'
        this.currentList = [...this.episodes]
      },
      async fetchLocations() {
        if (this.locations.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/location')
          this.locations = response.data.results
        }
        this.currentListName = 'locations'
        this.currentList = [...this.locations]
      },
      showSelected() {
        this.isSomethingSelected = true
      }
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
