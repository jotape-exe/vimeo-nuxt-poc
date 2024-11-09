<template>
  <p class="loading-text">{{ loadingText }}</p>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const loadingText = ref("Buscando")
let intervalId: any

const startLoadingAnimation = () => {
  let dots = ""
  intervalId = setInterval(() => {
    dots = dots.length < 7 ? dots + "." : "" 
    loadingText.value = `Buscando${dots}`
  }, 300)
}

onMounted(() => {
  startLoadingAnimation()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.loading-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}
</style>
