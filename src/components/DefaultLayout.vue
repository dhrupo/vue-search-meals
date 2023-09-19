<template>
    <navbar></navbar>
    <main>
        <div class="max-w-[1200px] mx-auto"></div>
        <router-view />
    </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
