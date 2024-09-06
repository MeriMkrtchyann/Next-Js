async  function getData (id : string) {
    const  response = await fetch(  `https://jsonplaceholder.typicode.com/posts/${id}`,{
        next : {
            revalidate : 60
        }
    })

    if (!response.ok) throw new Error('errrrror')

    return response.json()
}

type Props = {
    params : {
        id : string
    }
}

export async  function generateMetadata ({params : {id}}: Props) {
    const post = await getData(id)
    return {
        title: post.title
    }

}

export default async  function Post({params : {id}}: Props){
    const post: any = await getData(id)

    return(
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>

    )
}