import React from 'react';
import Post from './Post';
import { postsData } from './postsData';

const Posts = () => {
  return (
    <div className="posts">
      <p className="posts__title">
        Posts
      </p>
      <div className="posts__input">
        <form>
          <input type="text" placeholder="What's on your mind?" name="post" />
        </form>
      </div>
      <button className="posts__button">
        Post
      </button>
      {
        postsData.map((data) =>
          <Post message={data.message}
            likesCount={data.likesCount}
          />
        )
      }
    </div>
  )
}

export default Posts;