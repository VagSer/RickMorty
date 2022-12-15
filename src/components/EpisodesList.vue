<template>
    <div class="List">
        <episode-item 
            v-for="episode in episodes" 
            :key="episode.name" 
            :episode="episode"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import EpisodeItem from './EpisodeItem.vue'

export default defineComponent({
    name: 'episodes-list',
    components: {EpisodeItem},
    props: ['episodes'],
    data() {
        return {}
    }
})
</script>

<style>
</style>