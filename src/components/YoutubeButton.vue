<template>
    <a
        :href="href"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white bg-orange-600 border-orange-600 hover:bg-orange-500 hover:border-orange-500 transition-colors"
    >
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String,
});
</script>
