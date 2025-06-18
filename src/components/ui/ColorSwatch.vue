<template>
  <div>
    <div class="group cursor-pointer">
      <div
        class="relative shadow-sm group-hover:shadow-md w-full h-20 overflow-hidden group-hover:scale-105 transition-all duration-200 cursor-pointer"
        :style="{ backgroundColor: color.hex }"
      >
        <!-- Copy overlay -->
        <div
          class="absolute inset-0 flex-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"
          @click.stop="handleCopy"
        >
          <i
            v-if="!showCheckIcon"
            class="opacity-0 group-hover:opacity-100 text-white text-lg transition-opacity duration-200 pi pi-copy"
          ></i>
          <i
            v-else
            class="opacity-100 text-white text-lg transition-all duration-200 pi pi-check"
          ></i>
        </div>
      </div>
    </div>

    <!-- Color Info -->
    <div
      class="relative hover:opacity-80 mt-5 p-2 rounded-lg text-center cursor-pointer"
      @click="openColorPicker(index)"
    >
      <p class="font-medium text-sm underline">
        {{ color.name }}
      </p>
      <p class="font-mono text-gray-500 text-xs">
        {{ color.hex.toUpperCase() }}
      </p>
      <input
        :ref="(el: any) => setColorPickerRef(el, index)"
        type="color"
        :value="color.hex"
        class="top-2 absolute opacity-0 w-full h-full cursor-pointer"
        @input="handleColorChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ColorItem } from "@/types";
import { useColorPicker } from "@/composables/useColorPicker";

interface Props {
  color: ColorItem;
  index: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  updateColor: [hex: string];
}>();

const { setColorPickerRef, openColorPicker, copyColor } = useColorPicker();

const showCheckIcon = ref(false);

const handleCopy = async () => {
  await copyColor(props.color.hex);
  showCheckIcon.value = true;
  setTimeout(() => {
    showCheckIcon.value = false;
  }, 1000);
};

const handleColorChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("updateColor", target.value);
};
</script>
