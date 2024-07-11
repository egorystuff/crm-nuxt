<script setup lang="ts">
import Button from "../ui/button/Button.vue";
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="120px" class="mx-auto" />
    </NuxtLink>

    <button class="absolute top-2 right-3 trasition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20" />
    </button>

    <LayoutMenu />
  </aside>
</template>
