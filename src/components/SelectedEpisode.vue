<template>
    <div>
        <h3>{{selectedItem.name}}</h3>
            <p><strong>Дата выхода: </strong>{{selectedItem.air_date}}</p>
            <p><strong>Эпизод: </strong>{{selectedItem.episode}}</p>
            <p><strong>Персонажи: </strong>
            <ul>
                <li v-for="character in selectedItem.characters">{{character}}</li>
            </ul>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'selected-episode',
    props: {
        selectedItem: {
            type: Object,
            required: true
        }
    }
})
</script>

<style>

</style>