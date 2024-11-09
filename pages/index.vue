<template>
  <main class="flex items-center flex-col py-10">
    <p class="text-3xl mb-6">Fetch De Videos do VIMEO</p>
    <button @click="handleGetVideos" class="update-button">
      Atualizar Vídeos
    </button>
    <LoadingText v-if="isLoading" />
    <div>
      <div class="grid grid-cols-4 w-full gap-5">
        <CardVideoVimeo
          v-for="(video, index) in videos"
          :key="index"
          :loading="isLoading"
          :video="video"
          class="video-item"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { $http } = useNuxtApp()

const isLoading = ref(false)
const videos = ref<any>([])

const handleGetVideos = async () => {
  isLoading.value = true
  const { data } = await $http.vimeo.listarVideos()
  videos.value = data
  isLoading.value = false
}
</script>

<style>
.update-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.update-button:hover {
  background-color: #45a049;
}

.update-button:active {
  transform: scale(0.98);
}
</style>
