import { NodeProps } from "../interfaces/index";

type BlogProps = {
  post: NodeProps;
};

export default function Blog({ post }: BlogProps) {
  return (
    <div>
      <h1 className="text-blue-300">{post.title}</h1>
      <h1>{post.excerpt}</h1>
    </div>
  );
}
