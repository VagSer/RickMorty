<template>
    <p><strong>Дата выхода: </strong>{{selectedItem.air_date}}</p>
    <p><strong>Эпизод: </strong>{{selectedItem.episode}}</p>
    <p><strong>Персонажи: </strong>
        <ul>
            <li v-for="character in selectedItem.characters">
                <p @click="getMoreInfo(character)">{{character}}</p>
            </li>
        </ul>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'selected-episode',
    props: {
        selectedItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            newSelect: {}
        }
    },
    methods: {
        async getMoreInfo(character: string){
            const response = await axios.get(`${character}`)
            this.newSelect = await response.data
            this.$emit('update', this.newSelect)
        }
    }
})
</script>

<style>

</style>