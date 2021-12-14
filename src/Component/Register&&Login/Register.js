import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequestedAction } from '../../Redux/Action/authAction';
import * as yup from 'yup';
import Layout from '../Layout';
import classNames from 'classnames';
import { Formik } from 'formik';
const Register = () => {
	const dispatch = useDispatch();
	const register = useSelector((state) => state.auth.register);

	const initialValues = {
		ho_ten: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		sdt: '',
		dia_chi: '',
		is_admin: '0'
	};
	const validationSchema = yup.object().shape({
		ho_ten: yup
			.string()
			.min(3, 'Ho ten must be at least 3 characters')
			.max(16, 'Ho ten must be at most 16 characters')
			.required('Ho ten is required'),
		user_name: yup
			.string()
			.min(6, 'Tai khoan must be at least 6 characters')
			.max(16, 'Tai khoan must be at most 16 characters')
			.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Tai khoan invalid')
			.required('Tai khoan is required'),
		email: yup
			.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		password: yup.string().required('Mat khau is required'),
		password_confirm: yup
			.string()
			.required('Comfirm mat khau is required')
			.oneOf([yup.ref('password')], 'Mat khau is not match'),
		sdt: yup
			.string()
			.min(10, 'Sdt must be at least 10 characters')
			.matches(/^[0-9]+$/, 'Sdt invalid')
			.nullable(),
		dia_chi: yup
			.string()
			.min(6, 'Dia chi must be at least 6 characters')
			.max(66, 'Dia chi must be at most 66 characters')
			.nullable()
	});
	const onSubmit = (values) => {
		const user = {
			ho_ten: values.ho_ten,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			sdt: values.sdt,
			dia_chi: values.dia_chi
		};
		console.log(user);
		dispatch(registerRequestedAction(user));
	};
	return (
		<Layout>
			<section className='ftco-section'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-md-6 col-lg-5'>
							<div className='login-wrap p-4 p-md-5'>
								<div className='icon d-flex align-items-center justify-content-center'>
									<span className='fa fa-user-o' />
								</div>
								<h3 className='text-center mb-4'>Register</h3>
								<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
									{(props) => (
										<form onSubmit={props.handleSubmit} action='#' className='login-form'>
											<div className='form-group'>
												<input
													type='text'
													className={classNames('form-control rounded-left', {
														'is-invalid': props.touched.ho_ten && props.errors.ho_ten
													})}
													placeholder='Ho Va Ten'
													id='ho_ten'
													name='ho_ten'
													required
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.ho_ten}
												/>
												{props.touched.ho_ten && props.errors.ho_ten && (
													<div id='invalid-feedback'>{props.errors.ho_ten}</div>
												)}
											</div>
											<div className='form-group'>
												{/* <input type='text' className='form-control rounded-left' placeholder='user_name' required /> */}
												<input
													type='text'
													className={classNames('form-control rounded-left', {
														'is-invalid':
															(props.touched.user_name && props.errors.user_name) || register.errors?.user_name
													})}
													placeholder='Tai khoan'
													id='user_name'
													name='user_name'
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.user_name}
												/>
												{props.touched.user_name && props.errors.user_name && (
													<div id='invalid-feedback'>{props.errors.user_name}</div>
												)}
												{register.errors?.user_name && (
													<div className='invalid-feedback'>{register.errors?.user_name}</div>
												)}
											</div>

											<div className='form-group'>
												<input
													type='password'
													className={classNames("form-control rounded-left'", {
														'is-invalid': props.touched.password && props.errors.password
													})}
													placeholder='Mat khau'
													id='password'
													name='password'
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.password}
												/>
												{props.touched.password && props.errors.password && (
													<div id='invalid-feedback'>{props.errors.password}</div>
												)}
											</div>
											<div className='form-group'>
												<input
													type='password'
													className={classNames('form-control rounded-leftv', {
														'is-invalid': props.touched.password_confirm && props.errors.password_confirm
													})}
													placeholder='password_confirm'
													id='password_confirm'
													name='password_confirm'
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.password_confirm}
												/>
												{props.touched.password_confirm && props.errors.password_confirm && (
													<div id='invalid-feedback'>{props.errors.password_confirm}</div>
												)}
											</div>
											<div className='form-group'>
												<input
													type='text'
													className={classNames('form-control rounded-left', {
														'is-invalid': props.touched.sdt && props.errors.sdt
													})}
													placeholder='So dien thoai'
													id='sdt'
													name='sdt'
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.sdt}
												/>
												{props.touched.sdt && props.errors.sdt && <div id='invalid-feedback'>{props.errors.sdt}</div>}
											</div>
											<div className='form-group'>
												<input
													type='text'
													className={classNames('form-control rounded-left', {
														'is-invalid': (props.touched.email && props.errors.email) || register.errors?.email
													})}
													placeholder='Email'
													id='email'
													name='email'
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.email}
												/>
												{props.touched.email && props.errors.email && (
													<div id='invalid-feedback'>{props.errors.email}</div>
												)}
												{register.errors?.email && <div className='invalid-feedback'>{register.errors?.email}</div>}
											</div>
											<div className='form-group'>
												<input
													type='text'
													className={classNames("form-control rounded-left'", {
														'is-invalid': props.touched.dia_chi && props.errors.dia_chi
													})}
													placeholder='Dia chi'
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

											<div className='form-group d-md-flex'>
												<div className='w-50'>
													<label className='checkbox-wrap checkbox-primary'>
														Tạo tài khoản mới
														<input type='checkbox' defaultChecked />
														<span className='checkmark' />
													</label>
												</div>
												<div className='w-50 text-md-right'>
													<a style={{ color: '#79160c' }} href='/login'>
														<strong>Đã có tài khoản </strong>
													</a>
												</div>
											</div>
											<div className='form-group'>
												{register.is_loading ? (
													<button type='submit' disabled={props} className='btn btn-primary rounded submit p-3 px-5'>
														Đăng ký
													</button>
												) : (
													<button type='submit' className='btn btn-primary rounded submit p-3 px-5'>
														Đăng ký
													</button>
												)}
											</div>
										</form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Register;
