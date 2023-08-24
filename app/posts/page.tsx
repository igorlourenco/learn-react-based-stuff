import { use } from "react"

async function getPosts(): Promise<any> {
  const posts = await fetch("https://dummyjson.com/posts?limit=10")
  return posts.json()
}
export default function PostsPage() {
  const { posts } = use(getPosts())
  console.log(posts)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          POSTS
        </h1>
      </div>
    </section>
  )
}
