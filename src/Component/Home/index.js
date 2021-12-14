import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer';
import Nav from '../Nav';
import Product from '../Product/product_new';
const Home = () => {
	return (
		<div className='header'>
			<Nav />
			{/* carosoul */}
			<div className='main-slider'>
				<div className='swiper-container ' id='mainslide'>
					<div className='swiper-wrapper'>
						<Carousel>
							<Carousel.Item>
								<img style={{ width: '100%' }} src='/images/Slide-web4.jpg' alt='' />
							</Carousel.Item>
							<Carousel.Item>
								<img style={{ width: '100%' }} src='/images/Slide-web1.jpg' alt='' />
							</Carousel.Item>
							<Carousel.Item>
								<img style={{ width: '100%' }} src='/images/Slide-web.jpg' alt='' />
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
			<div className='wc lazy' data-bg='/uploaded/gioi-thieu/bg_gioithieuhome.jpg'>
				<div className='wcl lazy' data-bg='/images/wcl.png'>
					<div className='wcr lazy' data-bg='/images/wcr.png'>
						<div className='container'>
							<div className='inner-wc'>
								<h1 className='title-home-wc'>
									<a href='/gioi-thieu-vbc/'>
										<strong>Giới thiệu</strong>
										<span>MẬT ONG BỒ ĐỀ HOA </span>
									</a>
								</h1>
								<div className='content-wc'>
									<div style={{ textAlign: 'center' }}>
										<p>
											Mật ong Bồ Đề Hoa là mật ong từ rừng hoa Bồ đề, được sản xuất dựa trên nền tảng gần 60 năm kinh
											nghiệm nuôi ong gia truyền.&nbsp;
											<br />
											<strong>Sứ mệnh:</strong> Nâng cao chất lượng cuộc sống.
											<br />
											<strong>Mục tiêu:</strong> Là thương hiệu mật ong rừng được tin dùng nhất.
											<br />
											<br />
											Nhà máy sản xuất đạt tiêu chuẩn FSSC 22000 đã và đang xuất khẩu mật ong đi các nước phát triển
											như: Mỹ, Nhật, Hàn, Singapore,... Hiện nhà máy có hơn 20.000 đàn ong, 45 trang trại nuôi ong cùng
											3 nhà xưởng có tổng diện tích 20.000 m2.
										</p>
									</div>
								</div>
								{/*<a class="link-viewmore hvr-forward" href="/gioi-thieu-vbc/">Xem thêm <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* list-home */}
			<Product />
			<div className='line-home line-art-home lazy' data-bg='/uploaded/ykienkhachhang/bg.jpg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4'></div>
						<div className='col-lg-8'>
							<h2 className='title-home-wc text-center'>
								<a href='#!'>
									<strong>Khách hàng</strong>
									<span>nói về chúng tôi</span>
								</a>
							</h2>
							<div className='swiper-container ' id='slhome-'>
								<div className='swiper-wrapper swiper-container-cat'>
									<Carousel>
										<Carousel.Item>
											<div className='swiper-slide'>
												<div className='item-cathome item-hvr hvr-float'>
													<div className='inner-item-cat'>
														<div className='icon-cat'>
															<div className='inner-icon-cat'>
																<a href='/'>
																	<img
																		className='rounded-circle lazy'
																		src='/images/ykienkh/-uploaded-ykienkhachhang_a4-1_cr_160x160.jpg'
																		data-src='/images/ykienkh/-uploaded-ykienkhachhang_a4-1_cr_160x160.jpg'
																		alt='Chị Thu'
																	/>
																</a>
															</div>
														</div>
														<div className='content-item-cat'>
															<h3 className='name-item-cat'>
																<a href='/'>Chị Thu</a>
															</h3>
															<div>TP Hồ Chí Minh</div>
															<div className='intro-item'>
																Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm
																hoàn hảo, dịch vụ chăm sóc KH tận tâm.
															</div>
															<div className='c' />
														</div>
													</div>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className='swiper-slide'>
												<div className='item-cathome item-hvr hvr-float'>
													<div className='inner-item-cat'>
														<div className='icon-cat'>
															<div className='inner-icon-cat'>
																<a href='/'>
																	<img
																		className='rounded-circle lazy'
																		src='/images/ykienkh/-uploaded-ykienkhachhang_a3-1 (1)_cr_160x160.jpg'
																		data-src='/images/ykienkh/-uploaded-ykienkhachhang_a3-1 (1)_cr_160x160.jpg'
																		alt='Chị Hòa'
																	/>
																</a>
															</div>
														</div>
														<div className='content-item-cat'>
															<h3 className='name-item-cat'>
																<a href='/'>Chị Hòa</a>
															</h3>
															<div>Điện Biên</div>
															<div className='intro-item'>
																Da mặt của mình xuất hiện nhiều vết nám, tàn nhang. Mình đã sử dụng Sữa ong chúa Tam Đảo
																được 1 thời gian và hiệu quả đúng như mình mong muốn.
															</div>
															<div className='c' />
														</div>
													</div>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className='swiper-slide'>
												<div className='item-cathome item-hvr hvr-float'>
													<div className='inner-item-cat'>
														<div className='icon-cat'>
															<div className='inner-icon-cat'>
																<a href='/'>
																	<img
																		className='rounded-circle lazy'
																		src='/images/ykienkh/-uploaded-ykienkhachhang_a1-1_cr_160x160.jpg'
																		data-src='/images/ykienkh/-uploaded-ykienkhachhang_a1-1_cr_160x160.jpg'
																		alt='Nghệ sĩ hài Chiến Thắng'
																	/>
																</a>
															</div>
														</div>
														<div className='content-item-cat'>
															<h3 className='name-item-cat'>
																<a href='/'>Nghệ sĩ hài Chiến Thắng</a>
															</h3>
															<div>Hà Nội </div>
															<div className='intro-item'>
																Tôi bị đau dạ dày, sau khi sử dụng sản phẩm Tacumin - các triệu chứng mà tôi gặp phải
																giảm đi nhanh chóng.
															</div>
															<div className='c' />
														</div>
													</div>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className='swiper-slide'>
												<div className='item-cathome item-hvr hvr-float'>
													<div className='inner-item-cat'>
														<div className='icon-cat'>
															<div className='inner-icon-cat'>
																<a href='/'>
																	<img
																		className='rounded-circle lazy'
																		src='/images/ykienkh/-uploaded-ykienkhachhang_a2-1_cr_160x160.jpg'
																		data-src='/images/ykienkh/-uploaded-ykienkhachhang_a2-1_cr_160x160.jpg'
																		alt='Lê Thúy Vi'
																	/>
																</a>
															</div>
														</div>
														<div className='content-item-cat'>
															<h3 className='name-item-cat'>
																<a href='/'>Lê Thúy Vi</a>
															</h3>
															<div>Hải Phòng</div>
															<div className='intro-item'>
																Mình hay sử dụng sản phẩm Tacumin vào mỗi buổi sáng trước khi ngủ dậy, và dùng Tacumin
																để đắp mặt 2-3 lần/tuần, sau một thời gian sử dụng da mặt của mình trở nên căng bóng,
																trắng hồng hơn.
															</div>
															<div className='c' />
														</div>
													</div>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
							</div>
							<div className='swiper-pagination swiper-pagination1 page' />
						</div>
					</div>
				</div>
			</div>
			<div className='mo lazy' data-bg='/images/bg-x.png'>
				<div className='mo-l lazy' data-bg='/images/mo_l.png'>
					<div className='mo-r lazy' data-bg='/images/mo_r.png'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-6'>
									<h2 className='title-home-wc'>
										<a href='/gioi-thieu-vbc-honey/'>
											<strong>Sản phẩm</strong>
											<span>Mật ong rừng nguyên chất</span>
										</a>
									</h2>
									<div className='intro-matong'>
										<div style={{ textAlign: 'justify' }}>
											Mật ong vừa là thực phẩm đồng thời là dược liệu mang lại nhiều công dụng, vì thế mật ong được
											nhiều người ưa chuộng đặc biệt là các loại mật ong rừng. Tuy nhiên, mật ong rừng lại chính là một
											trong những sản phẩm được làm giả một cách “tinh vi” mà người sử dụng khó phân biệt được bằng mắt
											thường, gây hại với sức khỏe khi sử dụng.
											<br />
											Với sứ mệnh nâng cao chất lượng cuộc sống và cung cấp sản phẩm
											<strong> mật ong rừng nguyên chất</strong> 100%, giúp người tiêu dùng an tâm lựa chọn.
										</div>
									</div>
								</div>
								<div className='col-lg-6'>
									<div className='img-pro'>
										<a href='/gioi-thieu-vbc-honey/'>
											<img
												style={{ display: 'block' }}
												className='lazy'
												src='/images/-uploaded-gioi-thieu_c-oanh-c-thanh-hoa_cr_700x400.jpg'
												data-src='/images/-uploaded-gioi-thieu_c-oanh-c-thanh-hoa_cr_700x400.jpg'
												alt='Sản phẩm nổi bật'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='trust-home'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-1 col-md-12 col-12'></div>
									<div className='col-lg-11 col-md-12 col-12'>
										<div className='row'>
											<div className='col-lg-4 col-md-6 col-12'>
												<div className='item-trust hvr-float'>
													<div className='img-trust'>
														<img
															className='lazy'
															src='/images/Untitled-1.png'
															data-src='/images/Untitled-1.png'
															alt='Chất lượng'
														/>
													</div>
													<div className='title-trust'>Chất lượng</div>
													<div className='intro-trust'>Sản xuất trực tiếp từ vườn ong Tây nguyên</div>
												</div>
											</div>
											<div className='col-lg-4 col-md-6 col-12'>
												<div className='item-trust hvr-float'>
													<div className='img-trust'>
														<img className='lazy' src='/images/1000.png' data-src='/images/1000.png' alt='An toàn' />
													</div>
													<div className='title-trust'>An toàn</div>
													<div className='intro-trust'>Ong được nuôi tự nhiên trên Tây nguyên</div>
												</div>
											</div>
											<div className='col-lg-4 col-md-6 col-12'>
												<div className='item-trust hvr-float'>
													<div className='img-trust'>
														<img
															className='lazy'
															src='/images/8nhamay.png'
															data-src='/images/8nhamay.png'
															alt='Giao hàng miễn phí'
														/>
													</div>
													<div className='title-trust'>Giao hàng miễn phí</div>
													<div className='intro-trust'>24/7 Toàn quốc</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
