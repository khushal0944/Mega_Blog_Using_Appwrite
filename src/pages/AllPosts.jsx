import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    },[])

    return loading ? <h1 className="text-white">Loading... </h1> : (
        <Container>
            {posts.map((post)=>{
                return <PostCard {...post} key={post.$id}/>
            })}
        </Container>
    )
}

export default AllPosts