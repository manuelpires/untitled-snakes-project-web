export type Metadata = {
  name: string;
  external_url: string;
  image: string;
  attributes: {
    trait_type?: string;
    value: string;
  }[];
};
