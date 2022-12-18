<template>
  <h2>Рик и Морти</h2>
    <div class="Panel">
      <div>
        <Button @click="fetchEpisodes" label="Эпизоды"/>
        <Button @click="fetchCharacters" label="Персонажи"/>
        <Button @click="fetchLocations" label="Локации"/>
      </div>
        <input-text 
          id="serachingName" 
          type="text"
          placeholder="Имя / Название"
          v-model="searchingName"
        />
    </div>
    <currentList 
      :searchingName="searchingName"
      :currentListName="currentListName" 
      :currentList="searchedList"
      :nextPage="nextPage"
      :prevPage="prevPage"
      @update="updateList"
    />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CurrentList from './components/CurrentList.vue'
import axios from 'axios'

export default defineComponent({
  name:' App',
  components: {CurrentList},
  data() {
    return {
      currentList: [],
      searchingName: '',
      currentListName: '',
      characters: [],
      episodes: [],
      locations: [],
      nextPage: '',
      prevPage: null,
    }
  },
  methods: {
      async fetchCharacters() {
        if (this.characters.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          this.nextPage = response.data.info.next
          this.characters = response.data.results
        }
        this.currentListName = 'characters'
        this.currentList = [...this.characters]
        this.searchingName = ''
      },
      async fetchEpisodes() {
        if (this.episodes.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/episode')
          this.nextPage = response.data.info.next
          this.episodes = response.data.results
        }
        this.currentListName = 'episodes'
        this.currentList = [...this.episodes]
        this.searchingName = ''
      },
      async fetchLocations() {
        if (this.locations.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/location')
          this.nextPage = response.data.info.next
          this.locations = response.data.results
        }
        this.currentListName = 'locations'
        this.currentList = [...this.locations]
        this.searchingName = ''
      },
      updateList(newList: any[], newNext: string, newPrev: string) {
        this.currentList = [...newList]
        this.nextPage = newNext
        this.prevPage = newPrev
      }
  },
  computed: {
    searchedList() {
      return [...this.currentList.filter(item => item.name.toLowerCase().includes(this.searchingName) || item.name.includes(this.searchingName))]
    }
  }
})
</script>


<style>
.Panel {
  display: flex;
  justify-content: space-around;
}
.List {
  display: flex;
  flex-wrap: wrap;
}
.Item{
    width: min(90%, 400px);
    margin: 10px auto;
}
</style>
