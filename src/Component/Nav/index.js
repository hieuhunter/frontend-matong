import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '../lib/hooks/useRouter';
import { Link } from 'react-router-dom';
import { checkloginAction, logoutRequestedAction } from '../../Redux/Action/authAction';
import { brandRequestedAction } from '../../Redux/Action/brandAction';
import { categoryRequestedAction } from '../../Redux/Action/categoryAction';

const Total = function (arr, prop) {
	return arr.reduce(function (a, b) {
		return a + b[prop];
	}, 0);
};
const Nav = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const dsBrand = useSelector((state) => state.thuong_hieu.ds_brand);
	const dsCategory = useSelector((state) => state.danh_muc.ds_category);
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);
	const login = useSelector((state) => state.auth.login);
	console.log(login);
	useEffect(() => {
		dispatch(categoryRequestedAction());
		dispatch(brandRequestedAction());
		dispatch(checkloginAction());
	}, [dispatch]);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logoutRequestedAction(router));
	};
	return (
		<>
			<div className='top-page'>
				<div className='container pos-re'>
					<div className='row'>
						<div className='col-6'>
							<div className='panel-top'>
								<div className='lang'>
									<a href='/en/' className='vi'>
										VN
									</a>
								</div>
								<div className='frm-search'>
									<form action='/search/' id='frmsearchmb' method='get'>
										<input type='text' name='qr' id='txtsearchpc' placeholder='Tìm kiếm ' />
										<a className='btn-submit-search' href='/'>
											<i className='fa fa-search' aria-hidden='true' />
										</a>
									</form>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='panel-top'>
								<a className='link-top link-top-hotline' href='/login'>
									<span>
										<i class='bi bi-person-fill'></i> Tai khoan
									</span>
								</a>
								<a className='link-top link-top-cart' href='/Cart'>
									<i className='fa fa-shopping-cart' aria-hidden='true' />
									<span id='count-cart' className='count-cart'>
										{Total(dsCart.cart.ctcart, 'so_luong')}
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className='logo'>
						<div className='inner-logo'>
							<a href='/'>
								<img
									className='lazy'
									src='/images/logo.png'
									data-src='/uploaded/logo/logo.png'
									alt='Logo'
									style={{ maxWidth: '100%', margin: '0 auto' }}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='main-nav'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<ul className='menu menu-left'>
								<li className='home-active home-icon'>
									<a href='/'>Trang chủ</a>
								</li>
								<li className='abc'>
									<a href='/gioi-thieu-vbc/'>
										Giới thiệu <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='sub-menu'>
										<li className>
											<a href='/SPnoibat'>Sản phẩm nổi bật</a>
										</li>
										<li className='true'>
											<a href='/Baiviet'>Công dụng của mật ong</a>
										</li>
									</ul>
								</li>
								<li className='abc '>
									<a href='/'>
										Sản phẩm <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='sub-menu'>
										{dsCategory.danh_muc.map((dm) => (
											<>
												<li className='abc' key={dm.id}>
													<Link to={`/Product/${dm.id}`}>{dm.ten_dm}</Link>
												</li>
											</>
										))}
									</ul>
								</li>
								<li className='abc '>
									<a href='/'>
										Thương hiệu <i className='fa fa-angle-down' aria-hidden='true' />
									</a>

									<ul className='sub-menu'>
										{dsBrand.thuong_hieu.map((th) => (
											<>
												<li className='abc' key={th.id}>
													<Link to={`/Product_th/${th.id}`}>{th.ten_th}</Link>
												</li>
											</>
										))}
									</ul>
								</li>
							</ul>
						</div>
						<div className='col-lg-6'>
							<ul className='menu menu-right'>
								<li className='abc '>
									<a href='/Tintuc'>Tin tức </a>
								</li>
								<li className=' abc'>
									<a href='/HTPhanphoi'>Hệ thống phân phối </a>
								</li>
								<li className='abc '>
									<a href='/Contact'>Liên hệ </a>
								</li>

								{/* 	<li className='abc '>
									<Link to='/Login/'>Tài khoản </Link>
								</li> */}

								{login.is_authenticated && (
									<li className=' abc'>
										<a href='/Login'>
											<i class='bi bi-person-fill'>{login.user?.user_name}</i>
										</a>
										<ul className='sub-menu' style={{ width: '200px' }}>
											<li className='abc'>
												<a href='/Profile'>Thông tin</a>
											</li>
											<li className='avc'>
												<Link to='/' onClick={handleLogout}>
													Đăng xuất
												</Link>
											</li>	
										</ul>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Nav;
