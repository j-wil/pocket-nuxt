<script setup lang="ts">
const pocketbase = usePocketbase();

const user = pocketbase.authStore.model

function logout() {
  pocketbase.authStore.clear()
  navigateTo('/auth/login')
}

</script>
<template>
  <div class="justify-content-center align-content-center display: flex flex-wrap fill-height mt-8">

    <div class="surface-card p-4 shadow-2 border-round md:w-6 lg:w-4">
      <div class="text-3xl font-medium text-900 mb-3">{{ user?.id ? "Logged In!" : "Not Logged In" }}</div>
      <div class="font-medium text-500 mb-3">{{ user?.email }}</div>
      <div style="height: 250px" class="border-2 border-dashed surface-border"> <pre>{{ user }}</pre></div>
      <Button label="Logout" icon="pi pi-user" class="w-half mt-3" @click="logout"></Button>
      <Button label="Login" icon="pi pi-user" class="w-half mt-3 ml-3" @click="navigateTo('/auth/login')"></Button>
    </div>
    
  </div>



</template>
