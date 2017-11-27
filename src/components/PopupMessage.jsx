import React from 'react'
import { Grid, Message } from 'semantic-ui-react'

const PopupMessage = (props) => {
  const { message } = props;
  const messageType = message.type;
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