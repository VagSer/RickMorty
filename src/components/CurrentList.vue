<template>
    <selected-item 
        v-model:isVisible="isSomethingSelected" 
        v-model:selectedItem = "selectedItem"
    >
    </selected-item>
    <select v-model="characterStatus" @change="fetchData(`https://rickandmortyapi.com/api/character/?status=${characterStatus}`)">
            <option disabled value="">Любой статус</option>
            <option value="alive">Жив</option>
            <option value="dead">Мертв</option>
            <option value="unknown">Неизвестно</option>
    </select>
    <h1 v-if="(currentList.length===0) && (searchingName!=='')" class="Warning">
        По запросу ничего не найдено :(
    </h1>       
    <div class="List">
        <location-item
            v-if="currentListName==='location'" 
            v-for="location in currentList" 
            :key="location.name" 
            :location="location"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <episode-item 
            v-else-if="currentListName==='episode'"
            v-for="episode in currentList" 
            :key="episode.name" 
            :episode="episode"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <character-item 
            v-else-if="currentListName==='character'"
            v-for="character in currentList" 
            :key="character.name" 
            :character="character"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
    </div>
    <div v-if="currentList.length>0" class="Pagination">
        <Button
            v-if="prevNumber > 0"
            @click="fetchData(prevPage)"
        >
            {{prevNumber}}
        </Button>
        <Button
            disabled
        >
            {{currentNumber}}
        </Button>
        <Button
            v-if="nextPage !== null"
            @click="fetchData(nextPage)"
        >
            {{nextNumber}}
        </Button>
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
    props: ['searchingName', 'currentList', 'currentListName', 'nextPage'],
    data() {
        return {
            isSomethingSelected: false,
            selectedItem: {},
            prevPage: null,
            currentNumber: 1,
            nextNumber: 2,
            prevNumber: 0,
            characterStatus: ''
        }
    },
    methods: {
        async fetchData(url: string) {
            if (url === this.nextPage) {
                this.currentNumber++
                this.nextNumber++
                this.prevNumber++           
            } else {
                this.currentNumber--
                this.nextNumber--
                this.prevNumber-- 
            }
            console.log(this.characterStatus)
            const response = await axios.get(url)
            const newList = response.data.results
            const newNext = response.data.info.next
            const newPrev = response.data.info.prev
            this.prevPage = newPrev
            this.$emit('update', newList, newNext, newPrev)
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
</style>