import Link from "next/link";
import fakePosts from "../../posts";
import { getDenormalizedPosts } from "../../utils";

export default function Post({ post }) {
  return (
    <>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
        Category:{" "}
        <Link href={`/${post.category.Slug}`}>
          <a>{post.category.Name}</a>
        </Link>
      </header>
      <main>
        <article>
          <h1>{post.Title}</h1>
          <p>{post.Text}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = fakePosts;
  const paths = posts.map((post) => ({
    params: { slug: post.Slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = getDenormalizedPosts();
  const post = posts.find((p) => p.Slug === slug);

  return {
    props: { post }
  };
}
