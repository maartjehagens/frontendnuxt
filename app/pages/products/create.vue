<template>
  <div style="max-width: 420px">
    <h1 class="title">Nieuw product</h1>
    <form @submit.prevent="onSubmit" class="form">
      <label>
        <span>Naam</span>
        <input v-model="form.name" required />
      </label>
      <label>
        <span>Prijs</span>
        <input
          v-model.number="form.price"
          type="number"
          step="0.01"
          min="0"
          required
        />
      </label>
      <label class="row">
        <input id="active" type="checkbox" v-model="form.is_active" />
        <span for="active">Actief</span>
      </label>
      <button :disabled="pending">Opslaan</button>
      <p v-if="error" style="color: #c00">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProducts } from "../../composables/products";
import { reactive, ref } from "vue";

const { create } = useProducts();
const router = useRouter();
const form = reactive({ name: "", price: 0, is_active: true });
const pending = ref(false);
const error = ref<string | undefined>();

const onSubmit = async () => {
  try {
    pending.value = true;
    error.value = undefined;
    await create(form);
    router.push("/products");
  } catch (e: any) {
    error.value = e?.data?.message || e?.message || "Onbekende fout";
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
}
</style>
