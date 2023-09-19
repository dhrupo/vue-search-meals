import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import Ingredients from "../views/Ingredients.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },
            {
                path: "/by-ingredient/:ingredients?",
                name: "byIngredients",
                component: MealsByIngredients,
            },
            {
                path: "/meal/:id",
                name: "mealDetails",
                component: MealDetails,
            },
        ],
    },
    {
        path: "/guest",
        component: GuestLayout,
        // children: [
        //     {
        //         path: "/by-name/:name?",
        //         name: "byName",
        //         component: MealsByName,
        //     },
        // ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
