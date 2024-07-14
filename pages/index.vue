<script setup lang="ts">
useHead({
  title: "CRM System",
});
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-10">CRM System</h1>
    <div>
      <UiCard class="mb-3" draggable="true">
        <UiCardHeader role="button"> name card</UiCardHeader>
        <UiCardContent> content card </UiCardContent>
        <UiCardFooter> footer card</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>
