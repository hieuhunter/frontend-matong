import axios from 'axios';
import { personalFailedAction, personalSucceedAction } from '../Action/profileAction.js';
import { PERSONAL_REQUESTED } from '../Constants/constant';
import { call, put, takeLatest } from 'redux-saga/effects';

async function apiPersonal(user) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/profile`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Personal() {
	try {
		const res = yield call(apiPersonal);
		if (res.success) {
			yield put(personalSucceedAction(res.data));
		}
	} catch (err) {
		yield put(personalFailedAction(err.message));
	}
}

export function* Personal_Watcher() {
	yield takeLatest(PERSONAL_REQUESTED, Personal);
}
