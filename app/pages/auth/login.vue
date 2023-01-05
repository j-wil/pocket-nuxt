<script lang="ts" setup>
import { useToast } from "primevue/usetoast";

definePageMeta({
    layout: "empty",
});

const pocketbase = usePocketbase();
const email = ref<string | null>(null);
const password = ref<string | null>(null);
const remeberMe = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const toast = useToast();


// Login user
async function login() {
    isLoading.value = true;
    if (email && password) {
        await pocketbase.collection('users').authWithPassword(email.value as string, password.value as string).then((user) => {
            navigateTo('/')
        }).catch((error) => {
            console.log(error)
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: "Invalid email or password",
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
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/auth/signup">Join now!</a>
            </div>

            <div>
                <label for="email" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email" type="text" class="w-full mb-3" v-model="email" />

                <label for="password" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password" type="password" class="w-full mb-3" v-model="password" />

                <div class="flex align-items-center justify-content-between mb-6">
                    <div class="flex align-items-center">
                        <Checkbox id="rememberme1" :binary="true" v-model="remeberMe" class="mr-2"></Checkbox>
                        <label for="rememberme1">Remember me</label>
                    </div>
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" href="/auth/forgotpassword">Forgot
                        password?</a>
                </div>

                <Button label="Sign In" icon="pi pi-user" class="w-full" @click="login" :loading="isLoading"></Button>
            </div>
        </div>
    </div>

</template>

