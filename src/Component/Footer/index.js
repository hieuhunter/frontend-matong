import React from 'react';
const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='bot-footer'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-5 col-md-12'>
								<div className='title-footer'>CÔNG TY CP DỊCH VỤ MẬT ONG THƯƠNG HIỆU VIỆT NAM</div>
								<div className='line-footer' />
								<div className='content-footer'>
									<div className='add-f'>
										<strong>Địa chỉ: </strong>521/24, Tổ 11, Khu phố 4, An Phú Đông, Quận 12, Thành phố Hồ Chí Minh
									</div>
									<div className='email-f'>
										<strong>Email: </strong>hieu17dth1c@gmail.com
									</div>
									<div className='phone-f'>
										<strong>Điện thoại: </strong>02113.548.999
									</div>
									<div className='phone-f'>
										<strong>Hotline: </strong>0915 349 999
									</div>
								</div>
							</div>
							<div className='col-lg-4 col-md-6'>
								<div className='mnu-footer row'>
									<div className='col-lg-6 col-md-6 col-sm-12 col-12 box-menu'>
										<div className='title-footer'>
											<a href='/san-pham-mat-ong/'>Sản phẩm</a>
										</div>
										<div className='line-footer' />
										<ul className='menufooter'>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Hộp quà tặng
												</a>
											</li>
											<li>
												<a href='/sua-ong-chua/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Sữa ong chúa
												</a>
											</li>
											<li>
												<a href='/mat-ong/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Mật ong
												</a>
											</li>
											<li>
												<a href='/phan-hoa/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Phấn hoa
												</a>
											</li>
											<li>
												<a href='/ruou/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Rượu
												</a>
											</li>
										</ul>
									</div>
									<div className='col-lg-6 col-md-6 col-sm-12 col-12 box-menu'>
										<div className='title-footer'>
											<a href='/ho-tro-khach-hang/'>Hỗ trợ khách hàng</a>
										</div>
										<div className='line-footer' />
										<ul className='menufooter'>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Hướng dẫn mua hàng
												</a>
											</li>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Hình thức thanh toán
												</a>
											</li>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Chính sách vận chuyển
												</a>
											</li>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Chính sách đổi trả
												</a>
											</li>
											<li>
												<a href='/' className='hvr-forward'>
													<i className='fa fa-caret-right' aria-hidden='true' /> Chính sách bảo mật
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='title-footer'>
									<a href='/'>Liên kết mạng xã hội</a>
								</div>
								<div className='linksmo'>
									<a
										href='https://www.facebook.com/chapcanhthuonghieuviet'
										target='_blank'
										rel='noopener noreferrer'
										className='fa fa-facebook hvr-float'
									>
										s
									</a>
									<a href='/' className='fa fa-twitter hvr-float'>
										s
									</a>
									<a href='#!' className='fa fa-instagram hvr-float'>
										s
									</a>
									{/*<a href="" target="_blank" class="fa fa-pinterest hvr-float"></a>*/}
									<a
										href='https://www.youtube.com/channel/UCJ-dgCBidRuBoEMLew8Vm1A'
										target='_blank'
										rel='noopener noreferrer'
										className='fa fa-youtube hvr-float'
									>
										s
									</a>
									{/*<a href="" target="_blank" class="fa fa-houzz hvr-float"></a>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright'>
				<div className='container-fluid'>
					<div>
						<div style={{ textAlign: 'center' }}>
							© 2021 VBC, All Rights Reserved. {/* Google Tag Manager (noscript) */}{' '}
							<noscript>
								&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TS7SSZ2" height="0" width="0"
								style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
							</noscript>{' '}
							{/* End Google Tag Manager (noscript) */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
