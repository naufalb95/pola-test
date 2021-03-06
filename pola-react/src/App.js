import './App.css';
import Create from './views/Create';
import Edit from './views/Edit';
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

  const edit = async (input) => {
    await axios(`https://jsonplaceholder.typicode.com/posts/${input.id}`, {
      method: 'PUT',
      data: JSON.stringify({
        ...input
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    const editPost = post.map((p) => {
      if (p.id === input.id) {
        p = { ...input };
      }

      return p;
    });

    setPost([...editPost]);
  };

  return (
    <div className="App">
      <Create submit={submit} />
      <Edit edit={edit} />
      <Posts post={post} delete={deleteHandler} />
    </div>
  );
}

export default App;
