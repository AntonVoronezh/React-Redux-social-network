import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';

const Posts = ({message, likeCount}) => {
	return (
		<React.Fragment>
			<Message>
				<p>
				{message}
				<br/>
				<Icon name='thumbs up'/> 
				{likeCount}
				</p>
			</Message>
		</React.Fragment>
	);
};

export default Posts;

Posts.propTypes = {
	message: PropTypes.string.isRequired,
	likeCount: PropTypes.number.isRequired,
};
