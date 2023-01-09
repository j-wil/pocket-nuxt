<script lang="ts" setup>
// Ensures that the pocketbase url is set to the current host
const appConfig = useAppConfig()
const pb = usePocketbase()
onMounted(() => {
  const url = window.location.host
  if (!url.includes('localhost')) {
    pb.baseUrl = "https://" + url
  }
})
</script>

<template>
  <div>

    <slot />
  </div>
</template>
