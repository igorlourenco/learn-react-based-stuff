import { HTMLProps } from "react"

export function Ul(props: HTMLProps<HTMLUListElement>) {
  return <ul className="list-disc pl-6">{props.children}</ul>
}
