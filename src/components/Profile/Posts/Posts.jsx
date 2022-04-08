import React from 'react';
import Post from './Post';

const Posts = ({ profilePage, addPost, updateNewPostText }) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  }

  return (
    <div className="posts">
      <p className="posts__title">
        Posts
      </p>
      {
        profilePage.postsData.map((data) =>
          <Post
            message={data.message}
            likesCount={data.likesCount}
          />
        )
      }
      <div className="posts__input">
        <form>
          <textarea
            className="posts__input"
            onChange={onPostChange}
            value={profilePage.newPostText}
            ref={newPostElement} 
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
  )
}

export default Posts;