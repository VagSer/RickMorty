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
            <Button label="Подробности" />
        </template>
    </Card>
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
.Item{
    width: min(90%, 400px);
    margin: 10px auto;
}
#Item__Image {
    display: flex;
    margin: auto;
}
</style>