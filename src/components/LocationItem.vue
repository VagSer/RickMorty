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
            <Button label="Подробности" />
        </template>
    </Card>
</template>

<script lang="ts">
import {defineComponent } from 'vue';

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
    }
})
</script>

<style>

</style>