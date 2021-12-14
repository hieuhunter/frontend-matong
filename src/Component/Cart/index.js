import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { billRequestedAction } from '../../Redux/Action/billAction';
import { addcartRequestedAction, cartRequestedAction, deletecartRquestedAction } from '../../Redux/Action/cartAction';
import { productRequestedAction } from '../../Redux/Action/productAction';
import { Form, Formik } from 'formik';
import Layout from '../Layout';
import classNames from 'classnames';

const total_price = function (arr, qty, price) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * b.product[price];
	}, 0);
};
const Cart = () => {
	const dispatch = useDispatch();
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);
	const bill = useSelector((state) => state.hoa_don.hoa_don);
	const [phivc, setPhivc] = useState('20000');

	const delete_Cart = (id) => {
		const gio_hang = {
			id_sp: id
		};
		dispatch(deletecartRquestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};
	const addToCart = (id, so_luong, gia) => {
		const gio_hang = {
			id_sp: id,
			so_luong: so_luong,
			gia: gia
		};
		dispatch(addcartRequestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};

	useEffect(() => {
		dispatch(productRequestedAction());
		dispatch(cartRequestedAction());
	}, [dispatch]);

	const initialValues = {
		id_kh: '',
		ho_ten: '',
		sdt: '',
		email: '',
		ngay_dat: '',
		ngay_giao: '',
		dia_chi: '',
		da_duyet: '',
		da_thanh_toan: '',
		da_giao_hang: '',
		phi_van_chuyen: '20000',
		Ma_buudien: '1999'
	};
	const onSubmit = (values) => {
		const checkout = {
			ho_ten: values.ho_ten,
			email: values.email,
			sdt: values.sdt,
			dia_chi: values.dia_chi,
			phi_van_chuyen: values.phi_van_chuyen,
			Ma_buudien: values.Ma_buudien,
			gio_hang: dsCart.cart.ctcart
		};
		console.log(checkout);
		dispatch(billRequestedAction(checkout));
	};
	return (
		<Layout>
			<div className='page-one'>
				s
				<div className='container'>
					<div className='c15' />
					<div style={{ marginLeft: 0 }}>
						<div className='cart-title-number'>01</div>
						<div className='cart-title'>
							<h1 className='fl cart-title-name'> Giỏ hàng </h1>
							<div className='c' />
						</div>
					</div>
					<div className='c15' />
					<div className='hd-cart'>
						<div className='row'>
							<div className='col-lg-5 col-md-10 col-sm-10 col-10'>Thông tin sản phẩm</div>
							<div className='col-lg-5 col-md-5 hide-on-tab hide-on-mobile'>
								<div className='row'>
									<div className='col-6'>Đơn giá</div>
									<div className='col-6'>Thành tiền</div>
								</div>
							</div>
							<div className='col-lg-2 col-md-2 col-sm-2 col-2'>Xóa</div>
						</div>
					</div>
					<div className='c10' />
					<div id='giohang_row'>
						<div className='item-cart'>
							{dsCart.cart.ctcart.map((sp) => (
								<div className='row' key={sp.id}>
									<div className='col-lg-5 col-md-10 col-sm-10 col-10'>
										{' '}
										<a href='/mat-ong-nguyen-chat/mat-ong-bac-ha-470g.html' className='cart-image' target='_blank'>
											<img src={`${sp.product.hinh}`} align='left' alt='' />
										</a>{' '}
										<a
											href='/mat-ong-nguyen-chat/mat-ong-bac-ha-470g.html'
											className='cart-name'
											title='View product'
											target='_blank'
										>
											{sp.product.tensp}
										</a>
										<div className='quantity'>
											<div style={{ float: 'left' }}>
												{' '}
												Số lượng:
												<input type='text' className='txt-quantity' name='quantity[]' value={sp.so_luong} />
											</div>
											<div style={{ float: 'left', marginLeft: 10 }}>
												<i className='fa fa-plus' onClick={addToCart.bind(this, sp.product.id, 1, sp.product.gia)} />
												<i className='fa fa-minus' onClick={addToCart.bind(this, sp.product.id, -1, sp.product.gia)} />
											</div>
										</div>
										<input type='hidden' name='id_product[]' />
										<div className='c10' />
									</div>
									<div className='col-lg-5 col-md-5 hide-on-tab hide-on-mobile'>
										<div className='row'>
											<div className='col-6 align-middle cart-price text-center'>
												<div className='cart-price'>{sp.product.gia}&nbsp;</div>
											</div>
											<div className='col-6 align-middle text-center'>
												<div className='cart-price'> {sp.product.gia * sp.so_luong}&nbsp;VNĐ&nbsp;</div>
											</div>
										</div>
									</div>
									<div className='col-lg-2 col-md-2 col-sm-2 col-2 align-middle text-center'>
										<a className='remove-cart' href='#!'>
											{' '}
											<i className='fa fa-trash-o' onClick={delete_Cart.bind(this, sp.product.id)} aria-hidden='true' />
											xóa
										</a>{' '}
									</div>
								</div>
							))}
						</div>
						<h1 className='total-payment'>
							Tổng sản phẩm: <span> {parseInt(total_price(dsCart.cart.ctcart, 'so_luong', 'gia'))}đ</span>
						</h1>
						<hr />
						<h2 className='total-payment'>
							Phí vận chuyển: <span> {phivc}đ</span>
						</h2>
						<hr />
						<div className='total-payment'>
							Tổng cộng: <span> {parseInt(total_price(dsCart.cart.ctcart, 'so_luong', 'gia')) + phivc}đ</span>
						</div>
					</div>
					<div className='c10' />
					<div className='c20' />

					<div className='step-02'>
						<div className='cart-title-number'>02</div>
						<div className='cart-title'>
							<div className='fl cart-title-name'> Xác nhận đặt hàng</div>
							<div className='c' />
						</div>
						<div className='c20' />
						<em> Những trường có dấu * là trường bắt buộc phải nhập thông tin </em>
						<div className='c10' />
						<Formik initialValues={initialValues} onSubmit={onSubmit}>
							{(props) => (
								<Form>
									<div className='form-cart'>
										<div className='row'>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Họ tên*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.ho_ten && props.errors.ho_ten
														})}
														placeholder='Ho Va Ten *'
														id='ho_ten'
														name='ho_ten'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.ho_ten}
													/>
													{props.touched.ho_ten && props.errors.ho_ten && (
														<div id='invalid-feedback'>{props.errors.ho_ten}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Điện thoại*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.sdt && props.errors.sdt
														})}
														placeholder='Mobile Phone * '
														id='sdt'
														name='sdt'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.sdt}
													/>
													{props.touched.sdt && props.errors.sdt && <div id='invalid-feedback'>{props.errors.sdt}</div>}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Email*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.email && props.errors.email
														})}
														placeholder='Email* '
														id='email'
														name='email'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.email}
													/>
													{props.touched.email && props.errors.email && (
														<div id='invalid-feedback'>{props.errors.email}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Địa chỉ*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.dia_chi && props.errors.dia_chi
														})}
														placeholder='Address *'
														id='dia_chi'
														name='dia_chi'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.dia_chi}
													/>
													{props.touched.dia_chi && props.errors.dia_chi && (
														<div id='invalid-feedback'>{props.errors.dia_chi}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Ngày đặt*</label>
													<input
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.ngay_dat && props.errors.ngay_dat
														})}
														placeholder='ngay_dat* '
														id='ngay_dat'
														min='1000-01-01'
														max='3000-12-31'
														name='ngay_dat'
														type='date'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.ngay_dat}
													/>
													{props.touched.ngay_dat && props.errors.ngay_dat && (
														<div id='invalid-feedback'>{props.errors.ngay_dat}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Mã bưu điện*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.Ma_buudien && props.errors.Ma_buudien
														})}
														placeholder='Mabuudien/Zip * '
														id='Ma_buudien'
														name='Ma_buudien'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.Ma_buudien}
													/>
													{props.touched.Ma_buudien && props.errors.Ma_buudien && (
														<div id='invalid-feedback'>{props.errors.Ma_buudien}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label>Mã bưu điện*</label>
													<input
														type='text'
														className={classNames('form-control notNull*', {
															'is-invalid': props.touched.Ma_buudien && props.errors.Ma_buudien
														})}
														placeholder='Mabuudien/Zip * '
														id='Ma_buudien'
														name='Ma_buudien'
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.Ma_buudien}
													/>
													{props.touched.Ma_buudien && props.errors.Ma_buudien && (
														<div id='invalid-feedback'>{props.errors.Ma_buudien}</div>
													)}
												</div>
											</div>
											<div className='col-md-6'>
												<label>Phí vận chuyển*</label>
												<select
													aria-label='.form-select-sm example'
													value={props.values.phi_van_chuyen}
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													className={classNames('form-control notNull*', {
														'is-invalid': props.touched.phi_van_chuyen && props.errors.phi_van_chuyen
													})}
													id='phi_van_chuyen'
													name='phi_van_chuyen'
												>
													<option value={'20000'}>Giao trong tuần!</option>
													<option value={'60000'}>Giao trong 24h!</option>
												</select>
												{setPhivc(parseInt(props.values.phi_van_chuyen))}
											</div>
											<div className='col-md-12'>
												<div className='form-group'>
													<label>Nội dung</label>
													<textarea
														name='other_request'
														rows={5}
														style={{ height: 60 }}
														className='form-control txt-cart'
														defaultValue={''}
													/>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-group'>
													<div className='contact_input'>
														<input
															name='sercurity'
															placeholder='Captcha *'
															type='text'
															id='sercurity'
															style={{ width: 100, float: 'left' }}
															className='form-control txt-cart notNull'
														/>
														<img
															style={{ paddingLeft: '10px' }}
															src='images/ctsanpham/imagesercurity.php'
															name='imgCaptcha'
															align='absmiddle'
															id='imgCaptcha'
															alt=''
														/>{' '}
													</div>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-6'>
												<input
													name='input'
													type='button'
													className='btn-send-continue'
													defaultValue='Tiếp tục mua hàng'
												/>
											</div>

											<div className='col-6'>
												<button type='submit' className='float-right btn-send-cart'>
													Mua hàng
												</button>
											</div>
										</div>
									</div>
								</Form>
							)}
						</Formik>

						<div className='c10' />
						<div className='c10' />
						<div id='msgbox_formorder' className='msgbox'></div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Cart;
