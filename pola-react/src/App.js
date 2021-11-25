import './App.css';
import Create from './views/Create';
import Posts from './views/Posts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'GET'
        }
      );

      setPost(response.data);
    };

    fetchPost();
  }, []);

  const submit = async (input) => {
    try {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          data: JSON.stringify({ ...input }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
      );

      await axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      });

      setPost([
        ...post,
        {
          id: response.data.id,
          title: response.data.title,
          body: response.data.body,
          userId: response.data.userId
        }
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    await axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });

    const newPost = post.filter((p) => p.id !== id);

    setPost([...newPost]);
  };

  return (
    <div className="App">
      <Create submit={submit} />
      <Posts post={post} delete={deleteHandler} />
    </div>
  );
}

export default App;
