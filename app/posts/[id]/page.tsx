import { use } from "react"

async function getPost(id: string): Promise<any> {
  const post = await fetch(`https://dummyjson.com/post/${id}`)
  return post.json()
}

interface PostPageProps {
  params: {
    id: string
  }
}
export default function PostPage({ params }: PostPageProps) {
  const { id } = params
  const post = use(getPost(id))
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    </section>
  )
}
