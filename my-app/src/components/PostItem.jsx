import React from 'react'
import MyButton from './UI/button/MyButton';

function PostItem(props) {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.removePost(props.post)}>Delete post</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;