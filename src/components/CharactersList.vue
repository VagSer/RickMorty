<template>
  <div class="List">
    <character-item 
      v-for="character in characters" 
      :key="character.name" 
      :character="character"
    />
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
.List {
  display: flex;
  flex-wrap: wrap;
}
</style>