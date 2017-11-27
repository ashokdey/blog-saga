import React from 'react'
import { Item, Grid } from 'semantic-ui-react'

const Home = (props) => {
  const { posts } = props;
  const renderPosts = posts.map( (post) => (
    <Item key={post.id}>
    <Item.Content>
      <Item.Header as='a'>{post.postTitle}</Item.Header>
      <Item.Meta>{post.description}</Item.Meta>
      <Item.Extra>Written By: {post.author}</Item.Extra>
      <Item.Extra>{new Date(post.createdAt).toDateString()}</Item.Extra>
      <Item.Extra>{post.commentCount} {post.commentCount > 1 ? 'comments' : 'comment'} </Item.Extra>
    </Item.Content>
  </Item>
  ));
  return (
    <Grid padded="horizontally">
      <Item.Group>
        {renderPosts}
      </Item.Group>
    </Grid>
  );
}

export default Home;
