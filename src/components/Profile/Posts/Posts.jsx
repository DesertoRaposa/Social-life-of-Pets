import React from 'react';
import Post from './Post';

const Posts = ({
  posts,
  newPostText,
  addNewPost,
  onPostChange
}) => (
  <div className="posts">
    <p className="posts__title">
      Posts
    </p>
    {
      posts.map(({ message, likesCount }) =>
        <Post
          message={message}
          likesCount={likesCount}
          key={message}
        />
      )
    }
    <div className="posts__input">
      <form>
        <input
          className="posts__input"
          onChange={(e) => onPostChange(e.target.value)}
          value={newPostText}
        />
      </form>
    </div>
    <button
      onClick={addNewPost}
      className="posts__button"
    >
      Post
    </button>
  </div>
);

export default Posts;