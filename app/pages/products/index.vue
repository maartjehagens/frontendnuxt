<template>
  <div>
    <h1 class="title">Producten</h1>
    <div v-if="pending">Laden…</div>
    <div v-else-if="error">Fout: {{ error.message }}</div>

    <ul v-else class="grid">
      <ProductCard
        v-for="p in data?.data"
        :key="p.id"
        :product="p"
        @remove="removeAndRefresh(p.id)"
      />
    </ul>

    <div style="margin-top: 12px">
      <NuxtLink to="/products/create">Nieuw product</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProducts } from "../../composables/products";
import { useAsyncData } from "#imports";

const { list, remove } = useProducts();
const page = ref(1);
const { data, pending, error, refresh } = await useAsyncData(
  () => list(page.value),
  { watch: [page] }
);
const removeAndRefresh = async (id: number) => {
  await remove(id);
  await refresh();
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}
.grid {
  display: grid;
  gap: 10px;
}
</style>
