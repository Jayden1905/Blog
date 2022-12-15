import ArticleDetails from "../../../components/Posts/ArticleDetails";
import { PostDetailProps } from "../../../interfaces";
import { getPostDetails } from "../../../services/services";

export const revalidate = 10;

const fetchPostDetail = async (slug: string) => {
  const data = await getPostDetails(slug);

  return data as PostDetailProps;
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
