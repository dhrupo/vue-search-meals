<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div class="flex justify-center text-gray-600 p-8" v-if="!meals.length">
        No meals found!
    </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
    meals: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>
