<template>
    <div class="blackBackground" v-if="isVisible" @click="cancelSelection">
        <div class="selectedItem" @click.stop>
            <h3>Я модальное окно</h3>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'

export default defineComponent({
    name: 'selected-item',
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        selectedItem: {
            type: Object
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
    width: 500px;
    height: 500px;
    padding: 20px;
}
</style>