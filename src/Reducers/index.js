import {combineReducers} from "redux";

// this is just a sample, look up in ReduxMessageTrigger
const messageItemReducer = () =>{
  return [
    {
      text: "Item in Array",
    }
  ]
}

const graphMessageReducer = (graphMessage = null,action) =>{
  if (action.type === 'GRAPHQL_MESSAGE_RECEIVED'){
    return action.payload;
  }
  return graphMessage;
}

export default combineReducers(
    {
      messageItem: messageItemReducer,
      receivedMessage: graphMessageReducer
    }
)