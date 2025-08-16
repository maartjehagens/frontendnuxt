<template>
  <li class="card">
    <div>
      <strong>{{ product.name }}</strong>
      <div>€{{ product.price.toFixed(2) }}</div>
      <small v-if="!product.is_active">(inactief)</small>
    </div>
    <button @click="$emit('remove')">verwijderen</button>
  </li>
</template>

<script setup lang="ts">
import type { Product } from "../app/types/Product";
defineProps<{ product: Product }>();
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
}
</style>
