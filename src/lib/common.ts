export const generateKey = (...parts: (string | number)[]): string => {
  return parts.join("-");
};

export const getThumbnailImageUrl = (url: string): string => {
  return `/src/assets/_images/Thumbnail/${url}`;
};
