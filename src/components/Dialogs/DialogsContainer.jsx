import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messagesData,
    newMessageBody: state.dialogsPage.newMessageBody,
    users: state.dialogsPage.usersDialogsData
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;