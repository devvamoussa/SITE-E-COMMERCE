import { GET_POSTS } from '../Action/action';
// import uniqueid from 'uniqueid';


const initialState = {
	

	data: [
		{
			id: 1,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 2,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 3,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 4,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 5,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 6,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 7,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 8,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 9,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 10,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 11,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: 12,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		}
	]
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;

		default:
			return state;
	}
};

export default Reducer;