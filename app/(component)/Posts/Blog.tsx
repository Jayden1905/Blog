import { CategoryProps, NodeProps } from "../../../interfaces/index";

type BlogProps = {
  post: NodeProps;
  categories: CategoryProps[];
};

export default function Blog({ post, categories }: BlogProps) {
  const [category] = categories.map((item) => item);

  return (
    <div>
      <h1>{category.name}</h1>
      <h1>{post.title}</h1>
      <h1>{post.excerpt}</h1>
    </div>
  );
}
