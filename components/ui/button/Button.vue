<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/utils";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  asChild: false,
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </Primitive>
</template>
