<template>
  <section class="mb-12">
    <div class="bg-white rounded-lg overflow-hidden">
      <!-- Featured Image and Info -->
      <div class="relative">
        <div
          class="flex-center h-[300px] sm:h-[400px] lg:h-[500px]"
          :style="{
            backgroundColor: combination.combination.color.hex + '20',
          }"
        >
          <img
            :src="
              getThumbnailImageUrl(combination.combination.featuredImage.url)
            "
            :alt="combination.combination.name"
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>

        <!-- Like Button -->
        <div class="top-2 sm:top-4 right-2 sm:right-4 absolute">
          <button
            @click="$emit('toggleLike')"
            class="flex-items-gap bg-white bg-opacity-90 hover:bg-opacity-100 backdrop-blur-sm p-1.5 sm:p-2 rounded-md transition-all duration-200"
          >
            <i
              class="text-lg transition-colors duration-200 pi"
              :class="
                combination.combination.liked
                  ? 'pi-heart-fill text-red-500'
                  : 'pi-heart text-gray-400'
              "
            ></i>
            <p class="text-xs sm:text-sm">
              {{ combination.combination.likes }}
            </p>
          </button>
        </div>
      </div>

      <!-- Color Palette -->
      <div class="grid grid-cols-2 md:grid-cols-4">
        <ColorSwatch
          v-for="(color, index) in combination.combination.colors"
          :key="generateKey('color-swatch', combination.combination.id, index)"
          :color="color"
          :index="index"
          @update-color="$emit('updateColor', index, $event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CombinationData } from "@/types";
import { generateKey, getThumbnailImageUrl } from "@/lib";
import { ColorSwatch } from "@/components/ui";

interface Props {
  combination: CombinationData;
}

defineProps<Props>();

defineEmits<{
  toggleLike: [];
  updateColor: [index: number, hex: string];
}>();

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.style.display = "none";
};
</script>
