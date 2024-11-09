<template>
  <div class="video-item">
    <h3 class="video-title">{{ video.name }}</h3>
    <div ref="videoEmbed" class="video-embed" v-html="video.embed.html"></div>
  </div>
</template>

<script lang="ts" setup>

defineProps(['video','loading'])

</script>

<style>

.video-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9e9e9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
}

.video-title {
  font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: 600;
  text-align: start;
}

.video-embed {
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #c5c5c5;
}

.video-embed iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

</style>
