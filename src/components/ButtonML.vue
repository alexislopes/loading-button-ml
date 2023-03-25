<template>
    <button @click="setLoading">
      <Loading :class="{ 'in': loading }" />
      <span class="text" :class="{ 'out': loading }"> Iniciar sessão</span>
  </button>
</template>

<script setup>
import { ref } from "vue";
import Loading from "./Loading.vue";

const loading = ref(false);

function setLoading() {
  loading.value = true
  setTimeout(() => loading.value = false, 4000)
}


</script>

<style scoped>
button {
  @apply bg-primary text-white font-bold rounded-md px-8 py-3 flex w-48 text-center flex-col justify-center relative
}

.text {
  @apply transition-all duration-300 ease-in
}

.text.out {
  @apply -translate-y-8 opacity-0
}

span {
  @apply w-full
}

.in {
  @apply opacity-100 -translate-y-3.5 transition-all duration-300 ease-in
}
</style>