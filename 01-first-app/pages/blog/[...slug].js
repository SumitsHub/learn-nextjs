import { useRouter } from 'next/router';

function BlogPostPage() {
  const router = useRouter();
  console.log(router.pathname); // /blog/[...slug]
  console.log(router.query); // /blog/[...slug]
  // example route -> http://localhost:3000/blog/2020/123

  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  );
}

export default BlogPostPage;
