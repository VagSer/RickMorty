<template>
    <Card class="Character">
        <template #title>
            {{character.name}}
        </template>
        <template #content>
            <img :src="character.image" :alt="character.name"/>
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
.Character{
    width: min(90%, 400px);
    margin: 10px auto;
}
</style>