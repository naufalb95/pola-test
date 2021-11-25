import React, { useState } from 'react';

const Create = (props) => {
  const [input, setInput] = useState({
    title: '',
    body: '',
    userId: 1
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    props.submit(input);
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

export default Create;
