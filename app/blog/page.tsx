import {Metadata} from "next";
import Link from "next/link";

async  function getData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    })
    return response.json()
}

export const metadata : Metadata= {
    title : "Blog page",
    description : "Blog page"
}

export default async function Blog(){
    const posts = await getData()
    return(
        <>
            <h1> Blog page</h1>
            <ul>
                 {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                {posts.map((post : any) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                ))}
            </ul>
        </>
    )
}