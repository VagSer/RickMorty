<template>
    <div class="List">
        <location-item 
            v-for="location in locations" 
            :key="location.name" 
            :location="location"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LocationItem from './LocationItem.vue'

export default defineComponent({
    name: 'locations-list',
    components: {LocationItem},
    props: ['locations'],
    data() {
        return {}
    }
})
</script>

<style>
</style>