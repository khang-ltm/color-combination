import { ref } from "vue";

export const useColorPicker = () => {
  const colorPickerRefs = ref<{ [key: number]: HTMLInputElement }>({});

  const setColorPickerRef = (el: any, index: number) => {
    if (el && el instanceof HTMLInputElement) {
      colorPickerRefs.value[index] = el;
    }
  };

  const openColorPicker = (index: number) => {
    const colorInput = colorPickerRefs.value[index];
    if (colorInput) {
      colorInput.click();
    }
  };

  const copyColor = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      console.log(`Copied ${hex} to clipboard`);
    } catch (error) {
      console.error("Failed to copy color:", error);
    }
  };

  return {
    colorPickerRefs,
    setColorPickerRef,
    openColorPicker,
    copyColor,
  };
};
