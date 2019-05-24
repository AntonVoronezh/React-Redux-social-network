import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

const Posts = ({ posts: data }) => {
	const posts = data.map(p => {
		return <Post key={p.id} {...p} />;
	});

	return <React.Fragment>{posts}</React.Fragment>;
};

export default Posts;


