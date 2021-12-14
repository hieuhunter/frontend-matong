import axios from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { brandFailedAction, brandSucceedAction } from '../Action/brandAction';
import { BRAND_REQUESTED } from '../Constants/constant';

async function apiBrand() {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/brand`
	});
	return data;
}
function* dsBrand() {
	try {
		const res = yield call(apiBrand);
		console.log(res);
		if (res.success) {
			yield put(brandSucceedAction(res.data));
		}
	} catch (err) {
		yield put(brandFailedAction(err.message));
	}
}
export function* ds_BrandWatcher() {
	yield takeLatest(BRAND_REQUESTED, dsBrand);
}
