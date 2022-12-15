<template>
    <Card class="Item">
        <template #title>
            {{episode.episode}} {{episode.name}}
        </template>
        <template #content>
            <p><strong>Дата релиза:</strong> {{episode.air_date}}</p>
        </template>
        <template #footer>
            <Button label="Подробности" />
        </template>
    </Card>
</template>

<script lang="ts">
import {defineComponent } from 'vue';

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
    }
})
</script>

<style>

</style>