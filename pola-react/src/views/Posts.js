import React from 'react';

const Post = (props) => {
  return (
    <>
      <div>
        <ul>
          {props.post.map((p) => (
            <li key={p.id} onClick={() => props.delete(p.id)}>
              {p.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Post;
