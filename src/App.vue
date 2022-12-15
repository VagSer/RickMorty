<template>
  <h2>Рик и Морти</h2>
  <button @click="fetchCharacters">Персонажи</button>
  <div v-for="character in characters" :key="character.name">
    <h3>{{character.name}}</h3>
    <img :src="character.image" :alt="character.name"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name:' App',
  data() {
    return {
      characters: []
    }
  },
  methods: {
      async fetchCharacters() {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        this.characters = response.data.results
      }
  }
})
</script>


<style scoped>
</style>
