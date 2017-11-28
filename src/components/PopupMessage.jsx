import React from 'react'
import { Grid, Message } from 'semantic-ui-react'

const PopupMessage = (props) => {
  let message  = props.message || null;
  let messageType = null;
  if (message) {
    messageType = message.type;
  }
  if (message === null) {
    message = {};
    message.header ='Something went wrong';
    message.content = 'Please refresh/try later';
    messageType = {
      negative : true
    };
  }
  return (
    <div>
      <Grid centered>
        <Message 
          header={message.header}
          content={message.content}
          {...messageType}  
        />
      </Grid>
    </div>
  );
}
export default PopupMessage