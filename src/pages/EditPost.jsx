import React, { useEffect, useState } from 'react'
import { PostForm,Container } from '../components'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        } else{
            navigate("/")
        }
    },[slug,navigate])

    return (
        post ? <div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div> : null
    )
}

export default EditPost