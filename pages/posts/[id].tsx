import Head from "next/head";
import Link from "next/link";
import { fetchPostById, getAllPostIds } from "../../libs/rest-api/posts";
import { Post } from "../../types/entity";

function DetailPage({ post }: { post: Post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>Detail Page</h1>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>

      <Link href="/">go to list</Link>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await fetchPostById(params.id);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default DetailPage;
