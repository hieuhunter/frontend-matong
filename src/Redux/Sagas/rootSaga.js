import { all } from 'redux-saga/effects';
import { auth_checkLoginWatcher, auth_LoginWatcher, auth_RegisterWatcher, logout_UserWatcher } from './authSaga';
import { Bill_Watcher } from './billSaga';
import { ds_BrandWatcher } from './brandSaga';
import { addCart_Watcher, Cart_Watcher, deleteallCart_Watcher, xoaCart_Watcher } from './cartSaga';
import { ds_CategoryWatcher } from './categorySaga';
import { ct_ProductWatcher, dsProductWatcher } from './productSaga';
import { Personal_Watcher } from './profileSaga';
import { sp_BrandWatcher } from './sp_brandSaga';
import { sp_CategoryWatcher } from './sp_categorySaga';

function* rootSaga() {
	yield all([
		dsProductWatcher(),
		auth_LoginWatcher(),
		ct_ProductWatcher(),
		ds_CategoryWatcher(),
		ds_BrandWatcher(),
		auth_RegisterWatcher(),
		logout_UserWatcher(),
		auth_checkLoginWatcher(),
		sp_CategoryWatcher(),
		sp_BrandWatcher(),
		addCart_Watcher(),
		Cart_Watcher(),
		xoaCart_Watcher(),
		deleteallCart_Watcher(),
		Bill_Watcher(),
		Personal_Watcher()
	]);
}
export default rootSaga;
