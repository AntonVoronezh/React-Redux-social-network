import { ADD_DIALOG, ADD_NEW_DIALOG_TEXT } from '../actions/dialogs';

const initialState = {
	dialogs: [
		{ id: 1, name: 'Artur' },
		{ id: 2, name: 'John' },
		{ id: 3, name: 'Sara' },
		{ id: 4, name: 'Mary' },
		{ id: 5, name: 'Ivan' },
	],
	messages: {
		1: [
			{ id: 1, text: 'CoderDojo is a volunteer-led, open-source programming club, now 160+ dojos in Japan' },
			{ id: 2, text: 'Открыть все курсы от Codedojo. К сожалению, при загрузке ... все «просто компоненты»' },
			{ id: 3, text: 'odeDojo - это место, в котором Вы сможете овладеть этим искусством! .' },
		],
		2: [
			{
				id: 1,
				text:
					'A website of suggested ideas for code dojo events at the London Clojurians. View on GitHub. Welcome to London Clojurians Code Dojo. At a code ...',
			},
			{
				id: 2,
				text:
					'GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git ...',
			},
			{
				id: 3,
				text:
					'Teenage Lawnmower (source). Novashell (source). Proton SDK (source). Full list of Seths Ludumdare games with their sources · Seths github ...',
			},
		],
		3: [{ id: 1, text: 'nothing' }],
		4: [{ id: 1, text: 'nothing FFF' }],
		5: [{ id: 1, text: 'nothing ???' }],
	},

	newDialogText: '+++',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DIALOG: {
			const newDialog = {
				id: state.messages[action.payload].length + 1,
				text: state.newDialogText,
			};

		}


		default:
			return state;
	}
};

export default reducer;
