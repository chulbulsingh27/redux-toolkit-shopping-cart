import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from './PostSlice'


export const PostsLists = () => {
    const posts = useSelector(selectAllPosts)
    // const renderedPosts = posts.map(post => {
    //     <article key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.contet.substring(0, 100)}</p>
    //     </article>
    // })
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <section>
            <h2>Posts </h2>
            {renderedPosts}
        </section>
    )
}
