<template>
    <div class="details">{{ storeCounter.count }}</div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore()
</script>