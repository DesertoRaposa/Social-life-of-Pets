import {
  updateNewPostTextCreator,
  addPostCreator
} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    addNewPost: () => {
      dispatch(addPostCreator());
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;