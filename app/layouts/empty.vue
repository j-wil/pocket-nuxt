<script lang="ts" setup>
// Ensures that the pocketbase url is set to the current host
onMounted(() => {
  const appConfig = useAppConfig()
  const url = window.location.host
  if (!url.includes('localhost')) {
    appConfig.pocketbaseUrl = url
  }
})
</script>

<template>
  <div>

    <slot />
  </div>
</template>
