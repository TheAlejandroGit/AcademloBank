import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = 'http://localhost:4000/api/v1/transfer';

export const getUsersTransfers = userId => {
	return async dispatch => {
		try {
			const res = await axios.post('http://localhost:4000/api/v1/users/1/history')
			dispatch(transfersActions.getTransfers());
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountNumber, amount) => {
	return async dispatch => {
		try {
			const res = await axios.post('http://localhost:4000/api/v1/transfer')
			dispatch(transfersActions.newTransfer());
		} catch (error) {
			console.log(error);
		}
	};
};
