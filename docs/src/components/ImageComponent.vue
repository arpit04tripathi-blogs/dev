<template>
    <div>
        <div v-if="showDetails">
            <p>Properties</p>
            <ul>
                <li>prefix : {{ prefix }}</li>
                <li>imagePath : {{ imagePath }}</li>
                <li>imageUrl : {{ imageUrl }}</li>
            </ul>
        </div>
        <img :src="imageUrl" alt="Image is missing" srcset="">
    </div>    
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  prefix: {type: String, default: 'https://raw.githubusercontent.com/arpit04tripathi/cdn/main/notebook'},
  imagePath: { type: String, required: true },
})

const showDetails = ref(false);
const imageUrl = computed(() => props.prefix + props.imagePath);
</script>

<style scoped>
img {
    border-radius: 1rem;
    border: solid 0.25rem rgb(115, 130, 86);
    padding: 0.25rem;
}
</style>