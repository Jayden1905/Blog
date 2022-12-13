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
    <div className="container mx-auto scroll-smooth bg-primary px-10 font-ibmp md:px-20">
      <div className="relative top-24 flex flex-col items-center gap-14 scroll-smooth lg:top-0">
        <Features features={features} />
        <div className="grid grid-cols-1 px-0 lg:grid-cols-2 xl:px-16">
          {post.map((post) => (
            <Blog
              key={post.node.id}
              post={post.node}
              categories={post.node.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
