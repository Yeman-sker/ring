import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All published posts, sorted by date descending. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** All unique categories with post count. */
export async function getCategories(): Promise<Map<string, number>> {
  const posts = await getPublishedPosts();
  const map = new Map<string, number>();
  for (const post of posts) {
    const cat = post.data.category;
    if (cat) {
      map.set(cat, (map.get(cat) ?? 0) + 1);
    }
  }
  return map;
}

/** All unique tags with post count. */
export async function getTags(): Promise<Map<string, number>> {
  const posts = await getPublishedPosts();
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return map;
}

/** Posts grouped by year-month for timeline view. */
export async function getTimeline(): Promise<Map<string, Post[]>> {
  const posts = await getPublishedPosts();
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const key = `${post.data.date.getFullYear()}-${String(post.data.date.getMonth() + 1).padStart(2, '0')}`;
    const group = groups.get(key) ?? [];
    group.push(post);
    groups.set(key, group);
  }
  return groups;
}

/** Posts filtered by category. */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}

/** Posts filtered by tag. */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.tags?.includes(tag));
}
