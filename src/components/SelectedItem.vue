<template>
    <div class="blackBackground" v-if="isVisible" @click="cancelSelection">
        <div class="selectedItem" @click.stop>
            <selected-character v-if="selectedItem.hasOwnProperty('gender')" :selectedItem="selectedItem"/>
            <selected-episode v-if="selectedItem.hasOwnProperty('air_date')" :selectedItem="selectedItem"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import SelectedCharacter from './SelectedCharacter.vue'
import SelectedEpisode from './SelectedCharacter.vue'

export default defineComponent({
    name: 'selected-item',
    components: {SelectedCharacter, SelectedEpisode},
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        selectedItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        cancelSelection() {
            this.$emit('update:isVisible', false)
        }
    }
})
</script>

<style>
.blackBackground {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}
.selectedItem {
    margin: auto;
    background: white;
    width: min(95%, 600px);
    margin: 10px auto;
    overflow: scroll;
    overflow-x:hidden;  
    padding: 20px;
}
</style>