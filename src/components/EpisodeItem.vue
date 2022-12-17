<template>
    <Card class="Item">
        <template #title>
            {{episode.episode}} {{episode.name}}
        </template>
        <template #content>
            <p><strong>Дата релиза:</strong> {{episode.air_date}}</p>
        </template>
        <template #footer>
            <Button 
                @click="getMoreInfo"
                label="Подробности" 
            />
        </template>
    </Card>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'episode-item',
    props: {
        episode: {
            required: true,
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {
        async getMoreInfo(){
            const response = await axios.get(`https://rickandmortyapi.com/api/episode/${this.episode.id}`)
            const data = await response.data
            this.$emit('update:selectedItem', data)
            this.$emit('update:isSomethingSelected', true)
        }
    }
})
</script>

<style>

</style>