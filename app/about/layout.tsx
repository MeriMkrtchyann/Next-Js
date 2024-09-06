import React from "react";
import {Metadata} from "next";
import Link from "next/link";

export const metadata : Metadata = {
    title : 'About',
    description : "About page"
}

export default function Team({children,} : { children: React.ReactNode }){
    return (
       <div>
           <h1>About us</h1>
           <ul>
               <li>
                   <Link href={"/about/contact"}>Contact</Link>
               </li>
               <li>
                   <Link href={"/about/team"}>Team</Link>
               </li>
           </ul>
           {children}
       </div>
    )
}