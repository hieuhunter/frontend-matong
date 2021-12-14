import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestedAction } from '../../Redux/Action/authAction';
import Layout from '../Layout';
import * as yup from 'yup';
import { Formik } from 'formik';
import classNames from 'classnames';
const Login = () => {
	const dispatch = useDispatch();
	const login = useSelector((state) => state.auth.login);

	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = yup.object({
		user_name: yup.string().required('User name is required'),
		password: yup.string().required('Password is required')
	});

	const onSubmit = (values) => {
		const user = {
			user_name: values.user_name,
			password: values.password
		};
		console.log(user);
		dispatch(loginRequestedAction(user));
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
								<h3 className='text-center mb-4'>Đăng nhập</h3>
								<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
									{(props) => (
										<form action='#' onSubmit={props.handleSubmit} className='login-form'>
											<div className='form-group'>
												<input
													type='text'
													className={classNames('form-control rounded-left', {
														'is-invalid': (props.touched.user_name && props.errors.user_name) || login.errors?.user_name
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
												{login.errors?.user_name && <div className='invalid-feedback'>{login.errors?.user_name}</div>}
											</div>
											<div className='form-group'>
												<input
													type='password'
													className={classNames('form-control rounded-left', {
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
												{login.errors?.user && <div className='invalid-feedback'>{login.errors?.user}</div>}
											</div>
											<div className='form-group d-md-flex'>
												<div className='w-50'>
													<label className='checkbox-wrap checkbox-primary'>
														Nhớ mật khẩu
														<input type='checkbox' defaultChecked />
														<span className='checkmark' />
													</label>
												</div>
												<div className='w-50 text-md-right'>
													<a style={{ color: '#79160c' }} href='/Register'>
														<strong>Tạo tài khoản!</strong>
													</a>
												</div>
											</div>
											<div className='form-group'>
												{login.is_loading ? (
													<button type='submit' disabled={props} className='btn btn-primary rounded submit p-3 px-5'>
														Gửi
													</button>
												) : (
													<button type='submit' className='btn btn-primary rounded submit p-3 px-5'>
														Gửi
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
export default Login;
