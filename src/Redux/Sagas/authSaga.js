import { call, put, takeLatest } from '@redux-saga/core/effects';

import axios from 'axios';
import {
	loginFailedAction,
	loginSucceedAction,
	logoutFailedAction,
	logoutSucceedAction,
	registerFailedAction,
	registerSucceedAction
} from '../Action/authAction';
import { CHECK_LOGIN, LOGIN_REQUESTED, LOGOUT_REQUESTED, REGISTER_REQUESTED } from '../Constants/constant';
//DANGKY
async function apiRegister(user) {
	const { data } = await axios({
		method: 'POST',
		url: `http://127.0.0.1:8000/api/register`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}

function* authRegister(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiRegister, user);
		if (res.success) {
			yield put(registerSucceedAction(res.data));
			window.location.replace('/Login');
		} else {
			yield put(registerFailedAction(res.errors));
		}
	} catch (err) {
		yield put(registerFailedAction(err.message));
	}
}

export function* auth_RegisterWatcher() {
	yield takeLatest(REGISTER_REQUESTED, authRegister);
}

// LOGIN

async function apiLogin(user) {
	const { data } = await axios({
		method: 'POST',
		url: `http://127.0.0.1:8000/api/login`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}

function* authLogin(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiLogin, user);
		if (res.success) {
			const user = {
				id: res.data.id,
				user_name: res.data.user_name
			};
			yield put(loginSucceedAction(user));
			window.localStorage.setItem('token', res.data.access_token);
			window.location.replace('/');
		} else {
			yield put(loginFailedAction(res.errors));
		}
	} catch (err) {
		yield put(loginFailedAction(err.message));
	}
}

export function* auth_LoginWatcher() {
	yield takeLatest(LOGIN_REQUESTED, authLogin);
}

// check_login

async function api_checklogin(user) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/user`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* auth_checkLogin() {
	try {
		if (window.localStorage.getItem('token')) {
			const res = yield call(api_checklogin);
			if (res.success) {
				const user = {
					id: res.data.id,
					user_name: res.data.user_name
				};
				yield put(loginSucceedAction(user));
			}
		}
	} catch (err) {
		yield put(loginFailedAction(err.message));
	}
}

export function* auth_checkLoginWatcher() {
	yield takeLatest(CHECK_LOGIN, auth_checkLogin);
}

// logout

async function api_logout(user) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/logout`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}
function* logoutUser() {
	try {
		const res = yield call(api_logout);
		if (res.success) {
			yield put(logoutSucceedAction(res.data));
			window.location.replace('/login');
		}
	} catch (err) {
		yield put(logoutFailedAction(err.message));
	}
}
export function* logout_UserWatcher() {
	yield takeLatest(LOGOUT_REQUESTED, logoutUser);
}
