import fakePosts from "./posts";
import fakeCategories from "./categories";

export function getDenormalizedPosts() {
  return fakePosts.map((post) => {
    return {
      ...post,
      category: fakeCategories.find((c) => c.Id === post.category)
    };
  });
}

export function getDenormalizedCategories() {
  return fakeCategories.map((category) => {
    return {
      ...category,
      posts: category.posts.map((post) => fakePosts.find((p) => p.Id === post))
    };
  });
}
