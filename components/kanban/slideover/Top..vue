<script setup lang="ts">
import dayjs from "dayjs";
import { useDealSlideStore } from "~/store/deal-slide.store";

const store = useDealSlideStore();
</script>

<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase text-xl bold mb-4">About deal</div>
    <KanbanSlideoverLabel label-text="Deal name">
      <h2>{{ store.card?.name }}</h2>
    </KanbanSlideoverLabel>

    <KanbanSlideoverLabel label-text="Price">
      {{ converCurrency(store.card?.price || 0) }}
    </KanbanSlideoverLabel>

    <KanbanSlideoverLabel label-text="Status">
      <UiBadge variant="outline">{{ store.card?.status }}</UiBadge>
    </KanbanSlideoverLabel>

    <KanbanSlideoverLabel label-text="Data created">
      {{ dayjs(store.card?.$createdAt).format("DD.MMMM.YYYY") }}
    </KanbanSlideoverLabel>
  </div>
</template>
