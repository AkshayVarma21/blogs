import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getCategories, getPosts, getRecentPosts } from "../services";


export default function Home({ posts, recentPosts, categories }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>
          Blogs
        </title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {
            posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))
          }
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <div className="mb-4">
              <PostWidget recentPosts={recentPosts} />
            </div>
            <div  className="mt-4">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const recentPosts = (await getRecentPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { posts, recentPosts, categories }
  }
}
