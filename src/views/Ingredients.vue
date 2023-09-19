<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-400">Ingredients</h1>
        <input
            type="text"
            class="w-full bg-white rounded border-2 border-gray-200 focus:ring-orange-400 focus:border-orange-400"
            placeholder="search for
        ingredients..."
            v-model="keyword"
            @change="searchMeals"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a
                href="#"
                @click.prevent="openIngredient(ingredient)"
                v-for="ingredient of computedIngredients"
                :key="ingredient.idIngredient"
                class="block bg-white rounded p-3 mb-3 shadow"
            >
                <h3 class="text-2xl font-bold mb-2">
                    {{ ingredient.strIngredient }}
                </h3>
            </a>
        </div>
    </div>
</template>

<script setup>
import axiosClient from "../axiosClient";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();
const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
    if (!computedIngredients) {
        return ingredients;
    }
    return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

function openIngredient(ingredient) {
    store.commit("setIngredient", ingredient);
    router.push({
        name: "byIngredient",
        params: {
            ingredient: ingredient.strIngredient,
        },
    });
}

onMounted(() => {
    axiosClient.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
    });
});
</script>
