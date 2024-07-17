<script setup lang="ts">
const props = defineProps({
  labelText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-3">
    <label v-if="props.labelText" class="opacity-70 mb-0.5 block text-xs">{{ props.labelText }}</label>

    <div class="text-base">
      <slot />
    </div>
  </div>
</template>
