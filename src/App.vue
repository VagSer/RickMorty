<template>
  <h2 style="text-align: center">Рик и Морти</h2>
    <div class="Panel">
      <div>
        <Button 
          :disabled="currentListName==='episode'"
          @click="fetchList('episode')" label="Эпизоды"
        />
        <Button 
          :disabled="currentListName==='character'"
          @click="fetchList('character')" label="Персонажи"
        />
        <Button 
          :disabled="currentListName==='location'"
          @click="fetchList('location')" label="Локации"
        />
      </div>
    </div>
    <currentList 
      v-if="currentList.length>0"
      :currentListName="currentListName" 
      :currentList="currentList"
      :currentPage="currentPage"
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
      currentList: [] as any[],
      currentListName: '',
      currentPage: 1,
      nextPage: '',
      prevPage: '',
    }
  },
  methods: {
      async fetchList(name: string) {
        this.currentListName = name
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
        this.currentPage = 1
        this.currentList.forEach(item => item.episode = this.fetchAdditionalData(item.episode))
      },
      updateList(newList: any[], newNext: string, newPrev: string, newCurrent: number) {
        this.currentList = [...newList]
        this.nextPage = newNext
        this.prevPage = newPrev
        this.currentPage = newCurrent
      },
      fetchAdditionalData(args: string[]) {
        let newArgs = []
        args.map(async arg => {
          const response = await axios.get(arg)
          const name = response.data.name
          newArgs.push({name, url: arg})
        })
        return newArgs
      }
  },
})
</script>


<style>
.Panel {
  display: flex;
  justify-content: space-around;
  margin: 10px;
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
