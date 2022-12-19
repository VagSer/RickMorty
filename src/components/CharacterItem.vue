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
import {defineComponent} from 'vue'
import axios from 'axios'

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
        fetchAdditionalData(args: string[]) {
            let newArgs = []
            let id=0
            args.map(async arg => {
                const response = await axios.get(arg)
                const name = response.data.name
                newArgs.push({id, name, url: arg})
                id++
            })
            return newArgs
        },
        async getMoreInfo(){
            this.$emit('update:isSomethingSelected', true)
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.character.id}`)
            let data = await response.data
            data.episode = this.fetchAdditionalData(data.episode)
            this.$emit('update:selectedItem', data)
        },
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