<template>
    <Card class="Item">
        <template #title>
            {{location.name}}
        </template>
        <template #content>
            <p><strong>Тип:</strong> {{location.type}}</p>
            <p><strong>Измерение:</strong> {{location.dimension}}</p>
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
    name: 'location-item',
    props: {
        location: {
            required: true,
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {
        async getMoreInfo(){
            const response = await axios.get(`https://rickandmortyapi.com/api/location/${this.location.id}`)
            const data = await response.data
            this.$emit('update:selectedItem', data)
            this.$emit('update:isSomethingSelected', true)
        }
    }
})
</script>

<style>

</style>