<template>
    <div class="blackBackground" v-if="isVisible" @click="cancelSelection">
        <Card class="selectedItem" @click.stop>
            <template #title>
                {{selectedItem.name}}
            </template>
            <template #content>
                <selected-episode v-if="selectedItem.hasOwnProperty('air_date')" 
                v-model:selectedItem="selectedItem"
                @update="updateSelection"
                />
                <selected-character v-if="selectedItem.hasOwnProperty('gender')" 
                v-model:selectedItem="selectedItem"
                @update="updateSelection"
                />
                <selected-location v-if="selectedItem.hasOwnProperty('residents')" 
                v-model:selectedItem="selectedItem"
                @update="updateSelection"
                />
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import SelectedCharacter from './SelectedCharacter.vue'
import SelectedEpisode from './SelectedEpisode.vue'
import SelectedLocation from './SelectedLocation.vue'

export default defineComponent({
    name: 'selected-item',
    components: {SelectedCharacter, SelectedEpisode, SelectedLocation},
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
    methods: {
        cancelSelection() {
            this.$emit('update:isVisible', false)
            this.$emit('update:selectedItem', {})
        },
        updateSelection(newSelect: object) {
            this.$emit('update:selectedItem', newSelect)
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
    width: min(85%, 600px);
    margin: 10px auto;
    overflow: scroll;
    overflow-x:hidden;  
}
</style>