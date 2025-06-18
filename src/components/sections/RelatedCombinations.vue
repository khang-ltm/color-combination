<template>
  <section class="flex flex-col items-center">
    <div class="flex justify-between items-center mb-4 sm:mb-6">
      <h2 class="font-semibold text-xl sm:text-2xl lg:text-3xl">
        Related Combinations
      </h2>
    </div>

    <div class="gap-3 sm:gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 w-full">
      <CombinationCard
        v-for="combination in displayedCombinations"
        :key="combination.id"
        :combination="combination"
        @select-combination="$emit('selectCombination', combination.id)"
        @toggle-like="$emit('toggleLike', combination.id)"
      />

      <div v-if="hasMore">
        <button @click="$emit('loadMore')" class="btn-load-more">
          See More Combinations
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RelatedCombination } from "@/types";
import { CombinationCard } from "@/components/common";

interface Props {
  displayedCombinations: RelatedCombination[];
  hasMore: boolean;
}
defineProps<Props>();

defineEmits<{
  selectCombination: [combinationId: number];
  toggleLike: [id: number];
  loadMore: [];
}>();
</script>
