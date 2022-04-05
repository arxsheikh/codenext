import Link from "next/link";
import fakeCategories from "../categories";
import { getDenormalizedCategories } from "../utils";

export default function Category({ category }) {
  return (
    <>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
      </header>
      <main>
        <h1>{category.Name}</h1>
        <p>This is a category! Here are its posts:</p>
        <ol>
          {category.posts.map((post) => (
            <li key={post.Id}>
              <Link href={`/post/${post.Slug}`}>
                <a>{post.Title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const categories = fakeCategories;
  const paths = categories.map((category) => ({
    params: { slug: category.Slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const categories = getDenormalizedCategories();
  const category = categories.find((c) => c.Slug === slug);

  return {
    props: { category }
  };
}
