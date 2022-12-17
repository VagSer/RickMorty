<template>
    <selected-item 
        v-model:isVisible="isSomethingSelected" 
        v-model:selectedItem = "selectedItem"
    >
    </selected-item>        
    <div class="List">
        <location-item
            v-if="currentListName==='locations'" 
            v-for="location in currentList" 
            :key="location.name" 
            :location="location"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <episode-item 
            v-else-if="currentListName==='episodes'"
            v-for="episode in currentList" 
            :key="episode.name" 
            :episode="episode"
            v-model:selectedItem = "selectedItem"
            v-model:isSomethingSelected = "isSomethingSelected"
        />
        <character-item 
            v-else-if="currentListName==='characters'"
            v-for="character in currentList" 
            :key="character.name" 
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

export default defineComponent({
    name: 'current-list',
    components: {LocationItem, EpisodeItem, CharacterItem, SelectedItem},
    props: ['currentList', 'currentListName'],
    data() {
        return {
            isSomethingSelected: false,
            selectedItem: {},
        }
    },
})
</script>

<style>
</style>