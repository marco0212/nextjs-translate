import Link from "next/link";
import { fetchPosts } from "../libs/rest-api/posts";

function HomePage({ posts, hello }) {
  return (
    <div>
      <h1>Fucking Welcome Home Page {hello}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
      hello: 1,
    },
  };
}

export default HomePage;
