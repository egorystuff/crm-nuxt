<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import dayjs from "dayjs";
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import type { EnumStatus } from "~/types/deals.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import { converCurrency } from "~/utils/converCurrency";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import { useDealSlideStore } from "~/store/deal-slide.store";
import { generateColumnStyle } from "~/components/kanban/generate-gradient";

useHead({
  title: "CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery();
const store = useDealSlideStore();

type TypeMutationVariables = {
  docId: string;
  status?: EnumStatus;
};

const { mutate } = useMutation({
  mutationKey: ["move card"],
  mutationFn: ({ docId, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
      status,
    }),
  onSuccess: () => {
    refetch();
  },
});

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card;
  sourceColumnRef.value = column;
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
}

function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({ docId: dragCardRef.value.id, status: targetColumn.id });
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-10">CRM System</h1>

    <div v-if="isLoading">Loading...</div>

    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div
          class="min-h-screen"
          v-for="(column, index) in data"
          :key="index"
          @dragover="handleDragOver"
          @drop="() => handleDrop(column)">
          <div
            class="rounded bg-slate-700 py-1 px-5 mb-2 text-center"
            :style="generateColumnStyle(index, data?.length)">
            {{ column.name }}
          </div>

          <div>
            <KanbanCreateDeal :refetch="refetch" :status="column.id" />

            <UiCard
              v-for="card in column.items"
              :key="card.id"
              class="mb-3"
              draggable="true"
              @dragstart="() => handleDragStart(card, column)">
              <UiCardHeader role="button" @click="store.set(card)">
                <UiCardTitle> {{ card.name }} </UiCardTitle>
                <UiCardDescription> {{ converCurrency(card.price) }}</UiCardDescription>
              </UiCardHeader>

              <UiCardContent class="text-xs"> Company: {{ card.companyName }} </UiCardContent>
              <UiCardFooter> {{ dayjs(card.$createdAt).format("DD MMMM YYYY") }}</UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>

      <KanbanSlideover />
    </div>
  </div>
</template>
