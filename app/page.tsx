import { PostsProps, FeatureProps } from "../interfaces/index";
import { getFeaturedPosts, getPosts } from "../services/services";
import Blog from "./(component)/Posts/Blog";
import Features from "./(component)/Posts/Features";

async function fetchPosts() {
  const data = await getPosts();

  return data as PostsProps[];
}

async function fetchFeaturedPosts() {
  const data = await getFeaturedPosts();

  return data as FeatureProps[];
}

export default async function HomePage() {
  const post = await fetchPosts();
  const features = await fetchFeaturedPosts();

  return (
    <div className="container mx-auto md:px-20 px-10 bg-primary font-ibmp">
      <div className="flex flex-col gap-14 items-center relative md:top-0 top-24">
        <Features features={features} />
        {post.map((post) => (
          <Blog
            key={post.node.id}
            post={post.node}
            categories={post.node.categories}
          />
        ))}
      </div>
    </div>
  );
}
