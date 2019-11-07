import React, { Component } from "react";
import _ from "lodash";
import "./ChatRoomMsgs.css";

const Msg = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class ChatRoomMsgs extends Component {
  constructor(props) {
    super(props);
    this.ChatRoomMsgsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.ChatRoomMsgsRef.current.scrollTop = this.ChatRoomMsgsRef.current.scrollHeight;
  };
  render() {
    const msgsArr = _.map(this.props.messages, obj => {
      return obj;
    });
    return (
      <div className="ChatRoomMsgs" ref={this.ChatRoomMsgsRef}>
        {msgsArr.map(masg => (
          <Msg message={masg} key={masg.number} />
        ))}
      </div>
    );
  }
}

export default ChatRoomMsgs;
