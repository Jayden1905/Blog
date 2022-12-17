import ArticleDetails from "../../../components/Posts/ArticleDetails";
import { PostDetailProps, Slug } from "../../../interfaces";
import { getPostDetails, getSlugs } from "../../../services/services";

export const revalidate = 30;

export const generateStaticParams = async () => {
  const slugs = (await getSlugs()) as Slug;
  const slugRoutes = slugs.posts.map((slug) => slug.slug);

  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const fetchPostDetail = async (slug: string) => {
  const data = (await getPostDetails(slug)) as PostDetailProps;

  return data;
};

type Params = {
  slug: string;
};

export default async function PostPage({ params }: { params: Params }) {
  const post = await fetchPostDetail(params.slug);

  return (
    <div>
      <ArticleDetails post={post} />
    </div>
  );
}
