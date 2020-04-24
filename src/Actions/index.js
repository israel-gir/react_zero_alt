export const receivedMessage = (message) => {
  return {
    type: "GRAPHQL_MESSAGE_RECEIVED",
    payload: message
  }
}