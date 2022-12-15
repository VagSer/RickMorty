<template>
  <h1>Компонент с листом персонажей</h1>
  <div v-for="character in characters" :key="character.name">
    <h3>{{character.name}}</h3>
    <p><strong>Статус:</strong> {{character.status}}</p>
    <p><strong>Вид:</strong> {{character.species}}</p>
    <img :src="character.image" :alt="character.name"/>
    <button>Подробности</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'characters-list',
    components: {},
    props: ['characters'],
    data() {
        return {}
    }
})
</script>

<style>

</style>