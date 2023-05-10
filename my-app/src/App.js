import React, { useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Javascript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "C++", body: "C++ - язык программирования" }
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm addPost={addPost} />
      {posts.length !== 0
        ? <PostList removePost={removePost} posts={posts} title={"Список постов 1"} />
        : <div>
          <h1>Посты не найдены!</h1>
        </div>}
    </div>
  );
}

export default App;