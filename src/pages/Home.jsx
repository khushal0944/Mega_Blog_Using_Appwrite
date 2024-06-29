import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
	const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  

    return loading ? <h1 className="text-white">Loading... </h1> : posts && posts.length === 0 ? (
		<Link to={"/login"}><h1 className="text-white">Login To Read Posts. </h1></Link>
	) : (
		<div>
			{posts.map((post) => {
				return <PostCard {...post} key={post.$id} />;
			})}
		</div>
	);
}

export default Home;
