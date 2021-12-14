import axios from 'axios';
import {
	addcartFailedAction,
	addcartRequestedAction,
	cartFailedAction,
	cartSucceedAction,
	deletecartallFailedAction,
	deletecartallSucceedAction,
	deletecartFailedAction,
	deletecartSucceedAction
} from '../Action/cartAction';
import {
	ADDCART_REQUESTED,
	CART_REQUESTED,
	DELETEALLCART_REQUESTED,
	DELETECART_REQUESTED
} from '../Constants/constant';
import { call, put, takeLatest } from '@redux-saga/core/effects';

async function apiaddCart(gio_hang) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/addCart`,
		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* addCart(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(apiaddCart, gio_hang);
		if (res.success) {
			yield put(addcartRequestedAction(res.data));
		}
	} catch (err) {
		yield put(addcartFailedAction(err.message));
	}
}
export function* addCart_Watcher() {
	yield takeLatest(ADDCART_REQUESTED, addCart);
}

// Cart
async function apiCart() {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/listCart`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Cart() {
	try {
		const res = yield call(apiCart);
		if (res.success) {
			yield put(cartSucceedAction(res.data));
		}
	} catch (err) {
		yield put(cartFailedAction(err.message));
	}
}

export function* Cart_Watcher() {
	yield takeLatest(CART_REQUESTED, Cart);
}

// xoa cart
async function apiDeleteCart(gio_hang) {
	const { data } = await axios({
		method: 'DELETE',
		url: `http://127.0.0.1:8000/api/delete_cart`,
		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* xoaCart(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(apiDeleteCart, gio_hang);
		if (res.success) {
			yield put(deletecartSucceedAction(res.data));
		}
	} catch (err) {
		yield put(deletecartFailedAction(err.message));
	}
}

export function* xoaCart_Watcher() {
	yield takeLatest(DELETECART_REQUESTED, xoaCart);
}
// xoa all cart
async function api_deleteallCart(gio_hang) {
	const { data } = await axios({
		method: 'DELETE',
		url: `http://127.0.0.1:8000/api/delete_all`,
		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* deleteall_Cart(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(api_deleteallCart, gio_hang);
		if (res.success) {
			yield put(deletecartallSucceedAction(res.data));
		}
	} catch (err) {
		yield put(deletecartallFailedAction(err.message));
	}
}

export function* deleteallCart_Watcher() {
	yield takeLatest(DELETEALLCART_REQUESTED, deleteall_Cart);
}
