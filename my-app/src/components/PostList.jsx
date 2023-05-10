import React from 'react'
import PostItem from './PostItem';

function PostList(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.posts.map((post, index) => {
                return <PostItem removePost={props.removePost} number={index+1} post={post} key={post.id} />
            })}
        </div>
    )
}

export default PostList;
