<template>
  <div id="app" class="relative min-h-screen">
    <div
      class="absolute w-full h-[600px] background-cover-image"
      :style="{
        backgroundColor: selectedCombination.combination.color.hex,
      }"
    ></div>

    <div
      class="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 xl:max-w-[50%] max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl"
    >
      <nav class="flex justify-center mb-6 sm:mb-8">
        <div
          class="flex-items-gap font-semibold text-xs sm:text-sm"
          :style="{
            color: getOptimalTextColor(
              selectedCombination.combination.color.hex
            ),
          }"
        >
          <span>Colors</span>
          <i class="pi-chevron-right font-semibold text-xs pi"></i>
          <span>Color palette</span>
          <i class="pi-chevron-right text-xs pi"></i>
          <span class="max-w-[120px] sm:max-w-none font-medium truncate">{{
            selectedCombination.combination.name
          }}</span>
        </div>
      </nav>

      <!-- Header -->
      <header class="mb-8 sm:mb-12 text-center">
        <h1
          class="mb-2 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
          :style="{
            color: getOptimalTextColor(
              selectedCombination.combination.color.hex
            ),
          }"
        >
          {{ selectedCombination.combination.name }}
        </h1>
        <p
          class="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl"
          :style="{
            color: getOptimalTextColor(
              selectedCombination.combination.color.hex
            ),
          }"
        >
          color combination
        </p>
      </header>

      <!-- Main Content -->
      <main class="space-y-8 sm:space-y-12 lg:space-y-16">
        <FeaturedCombination
          :combination="selectedCombination"
          @toggle-like="toggleLikeFeature"
          @update-color="updateColor"
        />

        <RelatedCombinations
          :displayed-combinations="displayedRelatedCombinations"
          :has-more="hasMore"
          @select-combination="selectCombination"
          @toggle-like="toggleLikeRelated"
          @load-more="loadMore"
        />
      </main>

      <!-- Footer -->
      <footer class="mt-12 sm:mt-16 lg:mt-20 mb-8 text-center">
        <div class="mx-auto px-4 max-w-2xl">
          <p
            class="mb-4 sm:mb-6 font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed"
          >
            Use this color palette and create beautiful designs and documents!
          </p>
          <button
            class="bg-[#f7cac9] shadow-sm hover:shadow-md px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200"
          >
            Browse templates
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCombinations } from "@/composables/useCombinations";
import { getOptimalTextColor } from "@/lib";
import {
  FeaturedCombination,
  RelatedCombinations,
} from "@/components/sections";

const {
  selectedCombination,
  displayedRelatedCombinations,
  hasMore,
  selectCombination,
  toggleLikeFeature,
  toggleLikeRelated,
  updateColor,
  loadMore,
} = useCombinations();
</script>
<style lang="scss" scoped>
.background-cover-image {
  background-image: url("@/assets/_images/Asset/foreground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
