<template>
        <p><strong>Измерение: </strong>{{selectedItem.dimension}}</p>
        <p><strong>Тип: </strong>{{selectedItem.type}}</p>
        <p><strong>Персонажи: </strong>
        <ul>
            <li v-for="resident in selectedItem.residents">
                 <p @click="getMoreInfo(resident)">{{resident}}</p>
            </li>
        </ul>
        </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'selected-location',
    data() {
        return {
            newSelect: {}
        }
    },
    props: {
        selectedItem: {
            type: Object,
            required: true
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