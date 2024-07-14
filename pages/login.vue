<script setup lang="ts">
import { v4 as uuid } from "uuid";

useHead({
  title: "Login | CRM System",
});

// ---------------------------------------------------------------------------------------------
// variables
const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

// store & router
const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

// ---------------------------------------------------------------------------------------------

/**
 * This function handles the login process.
 * It creates an email session with Appwrite, gets the account details, sets the details to the store,
 * clears the input fields, and redirects the user to the home page.
 */
const login = async () => {
  isLoadingStore.set(true);
  // Create an email session with Appwrite
  await account.createSession(emailRef.value, passwordRef.value);

  // Get the account details
  const response = await account.get();

  // If the response is valid, set the account details in the store
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
    });
  }

  // Clear the input fields
  emailRef.value = "";
  passwordRef.value = "";
  nameRef.value = "";

  // Redirect the user to the home page
  await router.push({ name: "/" });
  isLoadingStore.set(false);
};

// ---------------------------------------------------------------------------------------------

const register = async () => {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value);
  await login();
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput v-model="emailRef" placeholder="Email" type="email" class="mb-5" />
        <UiInput v-model="passwordRef" placeholder="Password" type="password" class="mb-5" />
        <UiInput v-model="nameRef" placeholder="Name" type="name" class="mb-5" />

        <div class="flex items-center justify-center gap-5">
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
