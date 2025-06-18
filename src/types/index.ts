export interface ColorItem {
  slug: string;
  hex: string;
  name: string;
}

export interface Combination {
  liked: boolean;
  id: number;
  slug: string;
  color: ColorItem;
  featuredImage: {
    alt: string;
    url: string;
  };
  name: string;
  likes: number;
  colors: ColorItem[];
}

export interface RelatedCombination {
  id: number;
  name: string;
  slug: string;
  colors: string[];
  likes: number;
  liked: boolean;
}

export interface CombinationData {
  combination: Combination;
  relatedCombinations: RelatedCombination[];
}
