<template>
  <h2>Produkter</h2>
  <div v-if="loading" class="loading">Loading...</div>

  <div v-if="error" class="error">{{ error }}</div>

  <div v-if="!loading && products && products.length">
    <p v-for="product of products">
      <strong>{{product.name}}</strong> {{product.stock}}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const products = ref([])
const error = ref(null)

const apiKey = "a1963bba7c5ad2d272f18a45b819cb55"

// watch the params of the route to fetch the data again
async function fetchProducts() {
  error.value = products.value = null
  loading.value = true

  try {
    const response = await fetch(`https://lager.emilfolino.se/v2/products?api_key=${apiKey}`);
    const result = await response.json();

    products.value = result.data;
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

fetchProducts()

</script>
