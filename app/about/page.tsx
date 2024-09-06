import {Metadata} from "next";

export const metadata : Metadata= {
    title : "About page",
    description : "About page"
}

export default function About(){
    return <h3>About page</h3>
}