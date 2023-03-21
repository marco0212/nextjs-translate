export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export async function fetchPostById(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id} `
  );
  return response.json();
}

export async function getAllPostIds() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ params: { id: post.id.toString() } }));
}
