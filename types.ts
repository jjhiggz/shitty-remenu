export type Item = {
  name: string;
  description: string;
};

export type Section = {
  name: string;
  description: string;
  hasSeparators: boolean;
  items: Item[];
};

export type Restaurant = {
  name: string;
  description: string;
  sections: Section[];
};
