import React from 'react';
import { connect } from 'react-redux';
import{ fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add Post
        </Link>
      </div>
      <div>List of posts</div>
    </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex);;
