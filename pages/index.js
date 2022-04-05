import Link from "next/link";
import fakeCategories from "../categories";
import fakePosts from "../posts";

export default function Home({ categories, posts }) {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <section>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.Id}>
                <Link href={`/${category.Slug}`}>
                  <a>{category.Name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>All Posts</h2>
          <ol>
            {posts.map((post) => (
              <li key={post.Id}>
                <Link href={`/post/${post.Slug}`}>
                  <a>{post.Title}</a>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const categories = fakeCategories;
  const posts = fakePosts;

  return {
    props: { categories, posts }
  };
}
