import { use } from "react"
import Link from "next/link"

async function getPosts(): Promise<any> {
  const posts = await fetch("https://dummyjson.com/posts?limit=10")
  return posts.json()
}

interface PostsLayoutProps {
  children: React.ReactNode
}

export default function PostsLayout({ children }: PostsLayoutProps) {
  const { posts } = use(getPosts())
  return (
    <>
      <ul>
        {posts &&
          posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>

      {children}
    </>
  )
}
