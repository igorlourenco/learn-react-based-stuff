import { use } from "react"
import ReactMarkdown from "react-markdown"

import { Ul } from "@/components/ul"

const fetchMD = async () => {
  return fetch(
    "https://raw.githubusercontent.com/igorlourenco/learn-react-based-stuff/main/README.md"
  )
    .then((response) => response.text())
    .then((text) => {
      return text
    })
}

export default function IndexPage() {
  const mdFile = use(fetchMD())
  console.log(mdFile)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          project created to implement anything I want to learn about React and
          related technologies
        </h1>
      </div>
      <ReactMarkdown components={{ ul: Ul }}>{mdFile}</ReactMarkdown>,
    </section>
  )
}
