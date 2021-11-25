import React, { useState } from 'react';
import axios from 'axios';

const Edit = (props) => {
  const [input, setInput] = useState({
    title: '',
    body: '',
    userId: 1
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ ...input }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      props.submit(input);
    } catch (err) {
      console.log(err);
    }
  };

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div>Submit Post</div>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Title</label>
            <input
              name="title"
              id="title"
              type="text"
              value={input.title}
              onChange={inputHandler}
              placeholder="Give a title here"
            />
          </div>
          <div>
            <label>Body</label>
            <input
              name="body"
              id="body"
              type="text"
              value={input.body}
              onChange={inputHandler}
              placeholder="Give a body here"
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
