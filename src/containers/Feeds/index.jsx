import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getAllPosts } from './actions';

class Feeds extends Component {
  constructor(props){
    super(props);
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentWillMount(){
    this.loadPosts();
  }

  loadPosts() {
    const { user } = this.props;
    console.log('**User token', user.token);
    const token = user.token || localStorage.getItem('user');
    
    if (token) {
      this.props.getAllPosts(token);
    }
  }

  render() {
    console.log('***FEEDS***\n', this.props);

    const { posts } = this.props;
    const isLoading =  posts.loading;
    
    if (isLoading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Home posts={posts.posts}/>
    );
  }
}

function mapStateToProps({user, posts}) {
  return {
    user,
    posts
  };
}

export default connect(mapStateToProps, { getAllPosts })(Feeds);
