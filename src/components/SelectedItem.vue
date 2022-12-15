<template>
    <div class="blackBackground" v-if="isVisible" @click="cancelSelection">
        <div class="selectedItem" @click.stop>
            <h3>{{selectedItem.name}}</h3>
            <img :src="selectedItem.image" :alt="selectedItem.name" id="Item__Image"/>
            <p><strong>Статус: </strong>{{selectedItem.status}}</p>
            <p><strong>Вид: </strong>{{selectedItem.species}}</p>
            <p><strong>Пол: </strong>{{selectedItem.gender}}</p>
            <p><strong>Эпизоды: </strong>
                <ul>
                    <li v-for="episode in selectedItem.episode">{{episode}}</li>
                </ul>
            </p>
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
    padding: 20px;
}
</style>