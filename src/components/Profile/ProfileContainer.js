import { connect } from 'react-redux';
import Profile from '../Profile/Profile';

let mapStateToProps = (state) => {
  return {
    profileinfo: state.profilePage.profileData
  };
};


const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;