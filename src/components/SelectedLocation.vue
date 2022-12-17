<template>
    <div>
        <h3>{{selectedItem.name}}</h3>
            <p><strong>Измерение: </strong>{{selectedItem.dimension}}</p>
            <p><strong>Тип: </strong>{{selectedItem.type}}</p>
            <p><strong>Персонажи: </strong>
            <ul>
                <li v-for="resident in selectedItem.residents">{{resident}}</li>
            </ul>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'selected-location',
    props: {
        selectedItem: {
            type: Object,
            required: true
        }
    }
})
</script>

<style>

</style>