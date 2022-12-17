<template>
    <div>
        <h3>{{selectedItem.name}}</h3>
            <img :src="selectedItem.image" :alt="selectedItem.name" id="Item__Image"/>
            <p><strong>Статус: </strong>{{selectedItem.status}}</p>
            <p><strong>Вид: </strong>{{selectedItem.species}}</p>
            <p><strong>Пол: </strong>{{selectedItem.gender}}</p>
            <p><strong>Текущее местоположение: </strong>
                <span v-if="selectedItem.location.name !== 'unknown'" @click="getMoreInfo(selectedItem.location.url)">{{selectedItem.location.name}}</span>
                <span v-else>{{selectedItem.location.name}}</span>
            </p>
            <p><strong>Происхождение: </strong>
                <span v-if="selectedItem.origin.name !== 'unknown'" @click="getMoreInfo(selectedItem.origin.url)">{{selectedItem.origin.name}}</span>
                <span v-else>{{selectedItem.origin.name}}</span>
            </p>
            <p><strong>Эпизоды: </strong>
            <ul>
                <li v-for="episode in selectedItem.episode">
                    <p @click="getMoreInfo(episode)">{{episode}}</p>
                </li>
            </ul>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'selected-character',
    props: ['selectedItem'],
    data() {
        return {
            newSelect: {}
        }
    },
    methods: {
        async getMoreInfo(url: string){
            const response = await axios.get(`${url}`)
            this.newSelect = await response.data
            this.$emit('update', this.newSelect)
        }
    }
})
</script>

<style>

</style>