import { PostsProps } from "../interfaces/index";
import { getPosts } from "../services/services";
import Blog from "../component/Blog";

async function fetchPosts() {
  const data = await getPosts();

  return data as PostsProps[];
}

export default async function HomePage() {
  const data = await fetchPosts();

  return (
    <div className="container mx-auto sm:px-0 px-14">
      <h1>Home Page</h1>
      {data.map((post) => (
        <Blog key={post.node.id} post={post.node} />
      ))}
    </div>
  );
}
