import React from 'react';
import Layout from '../Component/Layout';
const Contact = () => {
	return (
		<Layout>
			<div>
				<div className='pos-re slide-child'>
					<div className='main-slider'>
						<div className='swiper-container ' id='mainslide'>
							<div className='swiper-wrapper'>
								<div className='swiper-slide'>
									<img src='/uploaded/slideshow/slide01811.jpg' alt='' width='100%' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='crumb'>
					<div className='container'>
						<a href='/'>
							<i className='fa fa-home' aria-hidden='true' />
						</a>{' '}
						<i className='fa fa-angle-right' /> <a href='/lien-he-1/'>Liên hệ</a>
					</div>
				</div>
			</div>
			<div>
				<div className='top-contact page-one'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 col-md-6 col-12'>
								<div className>
									<h1 className='page-name'>
										<span>Liên hệ</span>
									</h1>
									<div className='line' />
									<div className='content-page-contact'>
										<iframe
											allowFullScreen
											aria-hidden='false'
											frameBorder={0}
											height={450}
											src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.365133826846!2d106.692435014117!3d10.859808160620279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ3V54buFbiBU4bqldCBUaMOgbmggLSBDxqEgc-G7nyBxdeG6rW4gMTI!5e0!3m2!1svi!2s!4v1628651242918!5m2!1svi!2s'
											style={{ border: 0 }}
											tabIndex={0}
											width='100%'
											title='description'
										/>
									</div>
								</div>
							</div>
							<div className='col-lg-6 col-md-6 col-12'>
								<form
									action='/index4.php?page=contact&lang='
									method='post'
									id='contactform'
									onsubmit="return check_contact('contactform');"
								>
									<input type='hidden' name='code' defaultValue='save' />
									<input type='hidden' name='titlefrm' defaultValue='Thông tin liên hệ' />
									<div className='frm-contact'>
										<h1 className='page-name'>
											<span>Form liên hệ</span>
										</h1>
										<div className='line' />
										<div className='c25' />
										<div className='mes-frm'>Các trường được đánh dấu * là bắt buộc</div>
										<div className>
											<div className='waiting' />
											<div className='form-group input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text'>
														<i className='fa fa-user' aria-hidden='true' />
													</span>
												</div>
												<input
													type='text'
													placeholder='Họ tên'
													name='yourname'
													className='form-control form-control-lg notNull'
												/>
											</div>
											<div className='form-group input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text'>
														<i className='fa fa-phone' aria-hidden='true' />
													</span>
												</div>
												<input
													type='text'
													name='phone'
													placeholder='Điện thoại'
													className='form-control form-control-lg notNull'
												/>
											</div>
											<div className='form-group input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text'>
														<i className='fa fa-envelope-o' aria-hidden='true' />
													</span>
												</div>
												<input type='text' name='email' placeholder='Email' className='form-control form-control-lg' />
											</div>
											<div className='form-group input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text'>
														<i className='fa fa-map-marker' aria-hidden='true' />
													</span>
												</div>
												<input
													type='text'
													name='address'
													placeholder='Địa chỉ'
													className='form-control form-control-lg'
												/>
											</div>
											<div className='form-group input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text'>
														<i className='fa fa-comments-o' aria-hidden='true' />
													</span>
												</div>
												<textarea
													name='other_request'
													type='text'
													placeholder
													className='form-control form-control-lg'
													defaultValue={''}
												/>
											</div>
											<div className='form-group input-group'>
												<button type='button' onclick="$('#contactform').submit()" className='btn btn-warning btn-frm'>
													Gửi
												</button>
												<div id='msgbox_contactform' className='msgbox' />
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='map' />
			</div>
		</Layout>
	);
};
export default Contact;
