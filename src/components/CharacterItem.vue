<template>
    <div>
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
    name: 'character-item',
    props: {
        character: {
            required: true,
            type: Object
        }
    },
    data() {
        return {}
    }
})
</script>

<style scoped>

</style>