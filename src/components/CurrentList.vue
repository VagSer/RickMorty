<template>        
    <div class="List">
        <location-item
            v-if="currentListName==='locations'" 
            v-for="location in currentList" 
            :key="location.name" 
            :location="location"
        />
        <episode-item 
            v-else-if="currentListName==='episodes'"
            v-for="episode in currentList" 
            :key="episode.name" 
            :episode="episode"
        />
        <character-item 
            v-else-if="currentListName==='characters'"
            v-for="character in currentList" 
            :key="character.name" 
            :character="character"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LocationItem from './LocationItem.vue'
import EpisodeItem from './EpisodeItem.vue'
import CharacterItem from './CharacterItem.vue'

export default defineComponent({
    name: 'current-list',
    components: {LocationItem, EpisodeItem, CharacterItem},
    props: ['currentList', 'currentListName'],
    data() {
        return {}
    },
})
</script>

<style>
</style>