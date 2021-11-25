import React, { useState } from 'react';

const Edit = (props) => {
  const [input, setInput] = useState({
    id: 1,
    title: '',
    body: '',
    userId: 1
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    props.edit(input);
  };

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div>Edit Post</div>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Id</label>
            <input
              name="id"
              id="id"
              type="text"
              value={input.id}
              onChange={inputHandler}
              placeholder="Give a id here"
            />
          </div>
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
