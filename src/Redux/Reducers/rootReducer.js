import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billReducer from './billReducer';
import brandReducer from './brandReducer';
import cartReducer from './cartReducer';
import category_Reducer from './categoryReducer';
import productReducer from './productReducer';
import personalReducer from './profileReducer';
import sp_brandReducer from './sp_brandRducer';
import sp_categoryReducer from './sp_categoryReducer';

const rootReducer = combineReducers({
	san_pham: productReducer,
	danh_muc: category_Reducer,
	ds_brand: sp_brandReducer,
	ds_category: sp_categoryReducer,
	auth: authReducer,
	thuong_hieu: brandReducer,
	gio_hang: cartReducer,
	hoa_don: billReducer,
	thong_tin: personalReducer
});
export default rootReducer;
