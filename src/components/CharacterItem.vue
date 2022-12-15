<template>
    <Card class="Item">
        <template #title>
            {{character.name}}
        </template>
        <template #content>
            <img :src="character.image" :alt="character.name" id="Item__Image"/>
            <p><strong>Статус:</strong> {{character.status}}</p>
            <p><strong>Вид:</strong> {{character.species}}</p>
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
import {defineComponent} from 'vue';
import axios from 'axios';

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
    },
    methods: {
        async getMoreInfo(){
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.character.id}`)
            const data = await response.data
            console.table(data)
        }
    }
})
</script>

<style scoped>
.Item{
    width: min(90%, 400px);
    margin: 10px auto;
}
#Item__Image {
    display: flex;
    margin: auto;
}
</style>