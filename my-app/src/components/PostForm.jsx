import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function PostForm(props) {
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { id: Date.now(), title: post.title, body: post.body }
        props.addPost(newPost);
        setPost({ title: '', body: '' });
    };
    
    const [post, setPost] = useState({ title: '', body: '' });

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Заголовок поста"
                onChange={e => { setPost({ ...post, title: e.target.value }) }}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Описание поста"
                onChange={e => { setPost({ ...post, body: e.target.value }) }}
            />
            <MyButton onClick={addNewPost}>Опубликовать пост</MyButton>
        </form>
    )
}

export default PostForm;
