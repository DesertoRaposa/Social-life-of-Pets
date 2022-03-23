import React from 'react';
import Post from './Post';

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
    <Post message="hi there"/>
    <Post message="how are u dog?"/>
  </div>
  )
}

export default Posts;