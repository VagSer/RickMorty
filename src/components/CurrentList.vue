<template>
    <SelectButton
        class="Select"
        v-model="characterStatus"
        v-if="currentListName==='character'" 
        :options="statuses" 
        optionLabel="name"
        @click="fetchData(`https://rickandmortyapi.com/api/character/?status=${characterStatus.code}&page=${currentPage}`)"
    />
    <input-text 
          id="searchingName" 
          class="Select"
          type="text"
          placeholder="Имя / Название"
          v-model="searchingName"
          @input="searchList"
    />  
    <selected-item 
        v-model:isVisible="isSomethingSelected" 
        v-model:selectedItem = "selectedItem"
        style="z-index: 1"
    >
    </selected-item>
    <div v-if="currentListName==='episode'" class="Pagination">
        <Button 
            v-for="season in seasons" 
            v-bind:key="season"
            :disabled="season === currentPage"
            style="z-index: 0"
            @click="fetchData(season)"
        >
            {{season}}
        </Button>
    </div>
    <div v-else-if="currentList.length>0" class="Pagination">
        <Button
            v-if="prevNumber > 0"
            @click="fetchData(prevPage)"
        >
            {{prevNumber}}
        </Button>
        <Button
            disabled
        >
            {{currentPage}}
        </Button>
        <Button
            v-if="nextPage !== null"
            @click="fetchData(nextPage)"
        >
            {{nextNumber}}
        </Button>
    </div>   
    <div class="List">
        <location-item
            v-if="currentListName==='location'" 
            v-for="location in currentList" 
            v-bind:key="location.id" 
            :location="location"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <episode-item 
            v-else-if="currentListName==='episode'"
            v-for="episode in currentList" 
            v-bind:key="episode.id" 
            :episode="episode"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <character-item 
            v-else-if="currentListName==='character'"
            v-for="character in currentList" 
            v-bind:key="character.id" 
            :character="character"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LocationItem from './LocationItem.vue'
import EpisodeItem from './EpisodeItem.vue'
import CharacterItem from './CharacterItem.vue'
import SelectedItem from './SelectedItem.vue'
import axios from 'axios'

export default defineComponent({
    name: 'current-list',
    components: {LocationItem, EpisodeItem, CharacterItem, SelectedItem},
    props: ['currentList', 'currentListName', 'nextPage', 'prevPage', 'currentPage'],
    data() {
        return {
            isSomethingSelected: false,
            selectedItem: {},
            nextNumber: 2,
            prevNumber: 0,
            seasons: [1, 2, 3, 4, 5],
            statuses: [
                {name: "Любой", code: ''},
                {name: "Жив", code: 'alive'},
                {name: "Мёртв", code: 'dead'},
                {name: "Неизвестно", code: 'unknown'},
            ],
            characterStatus: {name: "Любой", code: ''},
            searchingName: ''
        }
    },
    methods: {
        async fetchData(url: string | number) {
            let newCurrent = this.currentPage
            if (url === this.nextPage) {
                newCurrent++
                this.nextNumber++
                this.prevNumber++           
            } else if (url === this.prevPage) {
                newCurrent--
                this.nextNumber--
                this.prevNumber-- 
            }
            let response
            let newList: string 
            let newNext: string 
            let newPrev: string
            if (this.currentListName === 'episode') {
                response = await axios.get(`https://rickandmortyapi.com/api/episode/?episode=S0${url.toString()}`)
                newCurrent = url
                console.log(newCurrent)
                newList = response.data.results
                newNext = ''
                newPrev = ''
            } else {
                response = await axios.get(url.toString())
                newList = response.data.results
                newNext = response.data.info.next
                newPrev = response.data.info.prev
            }
            this.$emit('update', newList, newNext, newPrev, newCurrent)
        },
        async searchList() {
          const response = await axios.get(`https://rickandmortyapi.com/api/${this.currentListName}/?status=${this.characterStatus.code}&name=${this.searchingName}`)
          console.log(`https://rickandmortyapi.com/api/${this.currentListName}/?status=${this.characterStatus.code}&?name=${this.searchingName}`)
          let newList = response.data.results
          let newNext = response.data.info.next
          let newPrev = response.data.info.prev
          let newCurrent = 1
          this.$emit('update', newList, newNext, newPrev, newCurrent)
        },
    }
})
</script>

<style>
.Warning {
    text-align: center;
}
.Pagination {
    display: flex;
    margin: 2px auto;
    width: 300px;
    justify-content: space-evenly;
}
.Select {
    display: flex;
    width: min(500px, 70%);
    justify-content: center;
    margin: 10px auto;
}
</style>