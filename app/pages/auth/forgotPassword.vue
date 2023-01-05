<script lang="ts" setup>
import { useToast } from "primevue/usetoast";

definePageMeta({
    layout: "empty",
});

const pocketbase = usePocketbase();
const email = ref<string | null>(null);
const isLoading = ref<boolean>(false);
const toast = useToast();


// Reset user password
async function resetPassword() {
    isLoading.value = true;
    if (email) {
        await pocketbase.collection('users').requestPasswordReset(email.value as string).then(() => {
            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: "Password reset email sent",
                life: 3000
            })
        })
    }
    isLoading.value = false;
    return
}


</script>

<template>

    <div class="justify-content-center align-content-center display: flex flex-wrap fill-height mt-8">
        
        <div class="surface-card p-4 shadow-2 border-round md:w-6 lg:w-3">
            <div class="text-center mb-5">
                <img src="/images/logos/pocketnuxt.svg" alt="Image" height="50" class="mb-3">
                <div class="text-900 text-3xl font-medium mb-3">Reset Password</div>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/auth/login">Back to Login</a>
            </div>
            <div>
                <label for="email" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email" type="text" class="w-full mb-3" v-model="email" />

                <Button label="Submit" icon="pi pi-user" class="w-full" @click="resetPassword" :loading="isLoading"></Button>
            </div>
        </div>
    </div>

</template>

