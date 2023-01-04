<script lang="ts" setup>
const ready = true
</script>

<template>
  
  <div>
    <Toast />
    <Toast position="bottom-right" group="br" />
    <NuxtLayout v-show="ready">
      
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>