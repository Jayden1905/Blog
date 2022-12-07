export type PostsProps = {
  node: NodeProps;
};

export type NodeProps = {
  createdAt: string;
  slug: string;
  id: string;
  title: string;
  excerpt: string;
  featureImage: FeatureImageProps;
  author: AuthorPorps;
  categories: CategoryProps[];
};

export type FeatureImageProps = {
  url: string;
};

export type AuthorPorps = {
  bio: string;
  id: string;
  name: string;
  photo: {
    url: string;
  };
};

export type CategoryProps = {
  name: string;
  slug: string;
};
