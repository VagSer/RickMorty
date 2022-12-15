<template>
    <div>
        <h3>{{selectedItem.name}}</h3>
            <img :src="selectedItem.image" :alt="selectedItem.name" id="Item__Image"/>
            <p><strong>Статус: </strong>{{selectedItem.status}}</p>
            <p><strong>Вид: </strong>{{selectedItem.species}}</p>
            <p><strong>Пол: </strong>{{selectedItem.gender}}</p>
            <p><strong>Эпизоды: </strong>
            <ul>
                <li v-for="episode in selectedItem.episode">{{episode}}</li>
            </ul>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'selected-character',
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