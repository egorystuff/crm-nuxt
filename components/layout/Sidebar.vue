<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";

const store = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

/**
 * Logout function that clears the session, clears the store, and redirects the user to the login page.
 * @returns {Promise<void>} Promise that resolves when the logout process is complete.
 */
const logout = async (): Promise<void> => {
  // Set the loading state to true
  isLoadingStore.set(true);

  // Delete the current session
  await account.deleteSession("current");

  // Clear the store
  store.clear();

  // Redirect the user to the login page
  await router.push("/login");

  // Set the loading state to false
  isLoadingStore.set(false);
};
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar relative w-full h-screen">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="120px" class="mx-auto" />
    </NuxtLink>

    <button class="absolute top-2 right-3 trasition-colors hover:text-primary" @click="logout">
      <Icon name="line-md:logout" size="20" />
    </button>

    <LayoutMenu />
  </aside>
</template>
