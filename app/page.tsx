import { PostsProps, FeatureProps } from "../interfaces/index";
import { getFeaturedPosts, getPosts } from "../services/services";
import Blog from "../components/Posts/Blog";
import Features from "../components/Posts/Features";

export const revalidate = 30;

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
  const postLength = post.length;

  return (
    <div className="container relative top-32 mx-auto h-full scroll-smooth bg-primary px-4 font-ibmp md:px-20 lg:top-0">
      <div className="relative flex h-full flex-col items-center justify-center gap-14 scroll-smooth">
        <Features features={features} />
        <div className="mb-14 grid h-full w-full grid-cols-1 gap-14 place-items-center px-0 lg:grid-cols-2 lg:px-14">
          {post.map((post) => (
            <Blog
              key={post.node.id}
              post={post.node}
              categories={post.node.categories}
              length={postLength}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
