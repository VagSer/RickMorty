<template>
  <h2>Рик и Морти</h2>
  <button @click="fetchCharacters">
    Персонажи
  </button>
  <characters-list :characters="characters"/>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CharactersList from './components/CharactersList.vue'
import axios from 'axios';

export default defineComponent({
  name:' App',
  components: {CharactersList},
  data() {
    return {
      characters: []
    }
  },
  methods: {
      async fetchCharacters() {
        if (this.characters.length === 0 ) {
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          this.characters = response.data.results
        }
      }
  }
})
</script>


<style scoped>
</style>
