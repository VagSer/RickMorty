<template>
  <div v-for="character in characters" :key="character.name">
    <character-item :character="character"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CharacterItem from './CharacterItem.vue'

export default defineComponent({
    name: 'characters-list',
    components: {CharacterItem},
    props: ['characters'],
    data() {
        return {}
    }
})
</script>

<style>

</style>