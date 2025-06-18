import { ref, computed, readonly } from "vue";
import type { CombinationData } from "@/types";
import { APP_CONFIG } from "@/lib";

import combinationsData from "@/data/_jsons/combinations/combinations.json";

// Composable
export const useCombinations = () => {
  // State
  const combinations = ref<CombinationData[]>(combinationsData.combinations);

  const selectedCombination = ref<CombinationData>(combinations.value[0]);

  const currentPage = ref(1);

  // Computed
  const itemsPerPage = APP_CONFIG.PAGINATION.ITEMS_PER_PAGE;

  const displayedRelatedCombinations = computed(() => {
    const end = currentPage.value * itemsPerPage;
    return selectedCombination.value.relatedCombinations.slice(0, end);
  });

  const hasMore = computed(() => {
    return (
      currentPage.value * itemsPerPage <
      selectedCombination.value.relatedCombinations.length
    );
  });

  // Actions
  const selectCombination = (combinationId: number) => {
    const target = combinations.value.find(
      (c) => c.combination.id === combinationId
    );
    if (!target) return;

    selectedCombination.value = JSON.parse(JSON.stringify(target));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLikeFeature = () => {
    const target = selectedCombination.value.combination;

    if (!target) return;

    target.liked = !target.liked;
    target.likes += target.liked ? 1 : -1;
  };

  const toggleLikeRelated = (combinationId: number) => {
    const selected = selectedCombination.value.relatedCombinations;
    const target = selected.find((c) => c.id === combinationId);
    if (!target) return;

    target.liked = !target.liked;
    target.likes += target.liked ? 1 : -1;
  };

  const updateColor = (colorIndex: number, newHex: string) => {
    const selected = selectedCombination.value.combination;
    const target = combinations.value.find(
      (c) => c.combination.id === selected.id
    );

    selected.colors[colorIndex].hex = newHex;
    if (target) {
      target.combination.colors[colorIndex].hex = newHex;
    }
  };

  const loadMore = () => currentPage.value++;

  return {
    combinations: readonly(combinations),
    selectedCombination,
    displayedRelatedCombinations,
    hasMore,
    selectCombination,
    toggleLikeFeature,
    toggleLikeRelated,
    updateColor,
    loadMore,
  };
};
