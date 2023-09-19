<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img
                class="rounded-t-xl w-full h-48 object-cover"
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
            />
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="text-slate-500">
                    {{ $filters.truncateWords(meal.strInstructions, 9) }}
                </p>
                <div class="flex items-center justify-between">
                    <YoutubeButton :href="meal.strYoutube"
                        >YouTube</YoutubeButton
                    >
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { computed } from "vue";
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object,
    },
});

const mealShortDescription = (desc) => {
    computed(() => desc.split(" ").slice(0, 15).join(" ").concat("..."));
};
</script>
