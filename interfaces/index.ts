import { ElementNode } from "@graphcms/rich-text-types";

export type PostsProps = {
  node: NodeProps;
};

export type PostDetailProps = {
  content: {
    raw: {
      children: ElementNode[];
    };
  };
} & FeatureProps;

export type Slug = {
  posts: slug[];
};

export type slug = {
  slug: string;
};

export type FeatureProps = {
  author: AuthorPorps;
  excerpt: string;
  categories: CategoryProps[];
} & WidgetProps;

export type WidgetProps = {
  title: string;
  featureImage: FeatureImageProps;
  createdAt: string;
  slug: string;
};

export type AdjacentProps = {
  categories: CategoryProps[];
  excerpt: string;
} & WidgetProps;

export type NodeProps = {
  id: string;
  excerpt: string;
  author: AuthorPorps;
  categories: CategoryProps[];
} & WidgetProps;

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
