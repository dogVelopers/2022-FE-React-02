import React, { useEffect, useState } from "react";
import axios from "axios";

// interface vs type

interface AuthorInterface { 
  name: string;
}

interface IPost {
  id: number;
  author: AuthorInterface;
  title: string;
  content: string;
}

function App() {
  const [state, setState] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>([]);

  function minusState() {
    setState((before) => before - 1);
  }

  useEffect(() => {
    // const response = axios.get("http://localhost:3004/posts");
    // console.log(response)
    // fetch("http://localhost:3004/posts");
    async function getPosts() {
      // const 반환 값 = await 시간이 걸리는 작업
      /// await 시간이 걸리는 작업
      const response = await axios.get<IPost[]>("http://localhost:3004/posts");

      setPosts(response.data);
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1>hello dogvelopers</h1>
      <h2>{state}</h2>
      {posts.map((post) => (
        <p key={post.title}>{post.title}</p>
      ))}
      <button onClick={minusState}>minus</button>
    </div>
  );
}

export default App;
