import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Textarea from '../../elements/UI/Textarea/Textarea';
import Button from '../../elements/UI/Button/Button';
import Posts from '../../elements/Posts/Posts';
import { Loader } from 'semantic-ui-react';

const Profile = ({
	posts,
	newMessageText,
	description,
	image,
	addPostCB,
	addNewMessageCB,
	isLoading,
	profile,
	error,
}) => {
	let profileUser, result;

	if (profile) {
		!error ? (profileUser = profile.fullName) : (profileUser = `Ошибка "${error.message}". Попробуйте еще раз.`);
	}

	isLoading
		? (result = (
				<Loader size="large" active>
					Loading
				</Loader>
		  ))
		: (result = profileUser);

	return (
		<React.Fragment>
			<Segment>
				<img src={image} alt={description} style={{ width: '100%' }} />
				{result}
			</Segment>
			<Segment>
				<Textarea newMessageText={newMessageText} addNewMessageCB={addNewMessageCB} />
				<Button content="Добавить пост" callback={addPostCB} />
			</Segment>
			<Segment>
				<Posts posts={posts} />
			</Segment>
		</React.Fragment>
	);
};

export default Profile;

Profile.propTypes = {
	posts: PropTypes.array.isRequired,
	newMessageText: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	image: PropTypes.string.isRequired,
	addPostCB: PropTypes.func.isRequired,
	addNewMessageCB: PropTypes.func.isRequired,
};
