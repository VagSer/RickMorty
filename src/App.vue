<template>
  <h2>Рик и Морти</h2>
    <div class="Panel">
      <div>
        <Button @click="fetchList('episode')" label="Эпизоды"/>
        <Button @click="fetchList('character')" label="Персонажи"/>
        <Button @click="fetchList('location')" label="Локации"/>
      </div>
        <input-text 
          id="serachingName" 
          type="text"
          placeholder="Имя / Название"
          v-model="searchingName"
          @input="searchList"
        />
    </div>
    <currentList 
      v-if="currentList.length>0"
      :searchingName="searchingName"
      :currentListName="currentListName" 
      :currentList="currentList"
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
      nextPage: '',
      prevPage: '',
    }
  },
  methods: {
      async fetchList(name: string) {
        this.currentListName = name
        this.searchingName = ''
        let response
        if (name === 'episode') {
          response = await axios.get('https://rickandmortyapi.com/api/episode/?episode=S01')
          this.nextPage = 'https://rickandmortyapi.com/api/episode/?episode=S02'
          this.prevPage = ''
        } else {
          response = await axios.get(`https://rickandmortyapi.com/api/${name}`)
          this.nextPage = response.data.info.next
          this.prevPage = response.data.info.prev
        }
        this.currentList = response.data.results
      },
      async searchList() {
        if (this.currentListName) {
          const response = await axios.get(`https://rickandmortyapi.com/api/${this.currentListName}/?name=${this.searchingName}`)
          this.nextPage = response.data.info.next
          this.prevPage = response.data.info.prev
          this.currentList = response.data.results
        }
      },
      updateList(newList: any[], newNext: string, newPrev: string) {
        this.currentList = [...newList]
        this.nextPage = newNext
        this.prevPage = newPrev
        this.searchingName = ''
      }
  },
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
