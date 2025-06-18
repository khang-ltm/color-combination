<template>
  <div
    class="group bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-lg h-[100px] sm:h-[120px] overflow-hidden transition-all"
  >
    <!-- Color Strip -->
    <div class="flex h-full group-hover:h-[50%] transition-all duration-300">
      <div
        v-for="(color, index) in combination.colors"
        :key="generateKey('color-strip', combination.id, index)"
        class="flex-1 cursor-pointer"
        :style="{ backgroundColor: color }"
      ></div>
    </div>

    <!-- Card Content - Only visible on hover -->
    <div
      class="group-hover:flex-1 group-hover:px-2 group-hover:pt-1 group-hover:h-[50%] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      @click="$emit('selectCombination')"
    >
      <div class="flex justify-between items-center h-full">
        <h3
          class="pr-2 font-semibold text-gray-600 text-sm sm:text-base truncate transition-colors duration-200"
        >
          {{ combination.name }}
        </h3>
        <button
          @click.stop="$emit('toggleLike')"
          class="flex flex-shrink-0 items-center gap-1 hover:scale-110 transition-transform duration-200"
        >
          <i
            class="text-xs sm:text-sm transition-colors duration-200 pi"
            :class="
              combination.liked
                ? 'pi-heart-fill text-red-500'
                : 'pi-heart text-gray-400'
            "
          ></i>
          <span class="text-xs sm:text-sm">{{ combination.likes }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RelatedCombination } from "@/types";
import { generateKey } from "@/lib";

interface Props {
  combination: RelatedCombination;
}

defineProps<Props>();

defineEmits<{
  selectCombination: [];
  toggleLike: [];
}>();
</script>
