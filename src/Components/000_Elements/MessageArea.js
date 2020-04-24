// import React from "react";
// import {connect} from "react-redux";
//
// class MessageArea extends React.Component{
//
//   render() {
//     console.log(this.props.messageItem);
//     return (<div>{this.props.messageItem ? this.props.messageItem : "No Message"}</div>)
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     messageItem : state.receivedMessage
//
//   }
// }
//
// export default connect(mapStateToProps)(MessageArea);

import React from "react";
import { useSelector } from "react-redux";

const MessageArea = () =>{

  //  This const can will used for obtain data of store. In this case messageItem.
  const message = useSelector( state => state.messageItem );

  return (
      <div>
        {/*{this.props.messageItem ? this.props.messageItem : "No Message"}*/}
        {/* I dont know whats is messageItem. In redux is an array. */}
        "No message"
      </div>
  );

};

export default MessageArea;