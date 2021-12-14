import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { ctproductRequestedAction, productRequestedAction } from '../../Redux/Action/productAction';
import { useParams } from 'react-router-dom';
import { addcartRequestedAction, cartRequestedAction } from '../../Redux/Action/cartAction';
import { Link } from 'react-router-dom';
const Detail = () => {
	const dispatch = useDispatch();
	const ct_Product = useSelector((state) => state.san_pham.ct_product);
	const dsProduct = useSelector((state) => state.san_pham.ds_product);
	let { id } = useParams();

	const addToCart = (id, gia) => {
		const gio_hang = {
			id_sp: id,
			so_luong: 1,
			gia: gia
		};
		dispatch(addcartRequestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};

	useEffect(() => {
		dispatch(ctproductRequestedAction(id), productRequestedAction());
	}, [dispatch, id]);
	return (
		<Layout>
			<div className='pos-re slide-child'>
				<div className='slide-page'>
					<div className='no-slide'>
						<img
							className='lazy'
							src='/images/d.jpg'
							data-src='/images/d.jpg'
							width='100%'
							alt='numo.vn thiết kế website số một việt nam'
							style={{ display: 'block' }}
						/>
					</div>
					<div className='name-cat-root'>Sản phẩm</div>
				</div>
				<div className='crumb'>
					<div className='container'>
						<a href='/'>
							<i className='fa fa-home' aria-hidden='true' />
						</a>{' '}
						<i className='fa fa-angle-right' /> <a href='/san-pham-mat-ong/'>Sản phẩm</a>&nbsp;
						<i className='fa fa-angle-right' />
						&nbsp;<a href='/mat-ong/'>Mật ong</a>&nbsp;
						<i className='fa fa-angle-right' />
						&nbsp;
						<a href='/mat-ong-bo-de-hoa/'>Mật ong Bồ đề hoa nguyên chất</a>
					</div>
				</div>
			</div>
			<div className='page-one'>
				<div className='mo-l'>
					<div className='mo-r'>
						<div className='top-proDetail'>
							<div className='container'>
								<div className='true'>
									<div className='row'>
										<div className='col-lg-6 col-md-12 col-sm-12'>
											<div className='slide-img-product'>
												<div className='swiper-container gallery-top'>
													<div className='swiper-wrapper'>
														<Carousel>
															<Carousel.Item>
																<div className='swiper-slide'>
																	<img alt='' className='img-detail' src={`${ct_Product.san_pham.hinh}`} />
																</div>
															</Carousel.Item>
															<Carousel.Item>
																<div className='swiper-slide'>
																	<img alt='' className='img-detail' src={`${ct_Product.san_pham.hinh}`} />
																</div>
															</Carousel.Item>
															<Carousel.Item>
																<div className='swiper-slide'>
																	<img alt='' className='img-detail' src={`${ct_Product.san_pham.hinh}`} />
																</div>
															</Carousel.Item>
															<Carousel.Item>
																<div className='swiper-slide'>
																	<img alt='' className='img-detail' src={`${ct_Product.san_pham.hinh}`} />
																</div>
															</Carousel.Item>
															<Carousel.Item>
																<div className='swiper-slide'>
																	<img
																		alt=''
																		className='img-detail'
																		src='/images/ctsanpham/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g8_thumb_700x460.jpg'
																	/>
																</div>
															</Carousel.Item>
														</Carousel>
													</div>
													{/* Add Arrows */}
												</div>
											</div>
										</div>
										<div className='col-lg-6 col-md-12 col-sm-12'>
											<div className='ih'>
												<h1 className='title-detail title-detail-pro' style={{ marginBottom: 0 }}>
													{' '}
													{ct_Product.san_pham.tensp}
												</h1>
												<div className='code-detail'>MSP: MOBDH-10G</div>
												<div className='c5' />

												<div className='price-detail'>
													<strong>{ct_Product.san_pham.gia} đ</strong>
												</div>

												<div className='intro-detail-pro'>
													<div className='inner-intro-detail-pro'>
														Mật ong Bồ đề hoa là <strong>mật ong rừng</strong> hoa Bồ Đề tự nhiên{' '}
														<strong>nguyên chất</strong>, không hương liệu, không chất bảo quản. Với nguồn hoa trên vùng
														núi cao, quy cách đóng gói tiện dụng là loại <strong>mật ong rừng sạch</strong> nhất, tiện
														dụng nhất, lượng Kali cao nhất.
														<br />
														<br />
														<span style={{ color: '#c0392b' }}>
															<strong>» Thành phần:</strong>
														</span>{' '}
														Mật ong rừng hoa Bồ Đề tự nhiên, nguyên chất
														<br />
														<span style={{ color: '#c0392b' }}>
															<strong>» Khối lượng tịnh:</strong>
														</span>
														&nbsp;10g
														<br />
														<span style={{ color: '#c0392b' }}>
															<strong>» Xuất xứ:</strong>{' '}
														</span>
														Việt Nam
														<br />
														<br />
														Giao hàng toàn quốc
														<br />
														<strong>Hotline:</strong>&nbsp;
														<span style={{ color: '#c0392b' }}>
															<strong>0923071999</strong>
														</span>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-6 col-md-12'>
														<Link
															to='/Cart'
															onClick={addToCart.bind(this, ct_Product.san_pham.id, ct_Product.san_pham.gia)}
															className='btn-add-detail btn-add-detail2 linkview'
														>
															<i className='fa fa-shopping-cart' aria-hidden='true' /> Mua hàng ngay
														</Link>
													</div>
													<div className='col-lg-6 col-md-12'>
														<a href='tel:0923071999' className='btn-add-detail btn-add-detail1 linkview'>
															<i className='fa fa-phone' aria-hidden='true' /> Hotline:0923071999
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='bot-proDetail'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-9 col-md-12'>
										<div className='content-detail'>
											<div className='title-page'>
												<span>Thông tin sản phẩm</span>
											</div>
											<div className='c30' />
											{/*<button type="button" class="collapsible" id="btntoc">Quickview</button>
              <div class="content-toc">
                <div id="tocDiv" class="box-neolink">
                  <ul id="tocList"></ul>
                </div>
              </div> */}
											<h2>
												<span style={{ color: '#c0392b' }}>
													Mật ong Bồ đề hoa&nbsp;- mật ong rừng sạch nhất, tiện dụng nhất
												</span>
											</h2>
											<strong>Mật ong bồ đề hoa</strong> là&nbsp;mật ong rừng hoa &nbsp;Bồ Đề tự nhiên, không hương
											liệu, không chất bảo quản,&nbsp;<strong>mật ong rừng nguyên chất 100%</strong> được thu hoạch từ
											tháng 4 đến tháng 8 hàng năm tại các khu rừng vùng núi phía Bắc Việt Nam&nbsp;như Hà Giang, Lào
											Cai, Hòa Bình, Yên Bái, Nghệ An, Hà Tĩnh, Tuyên Quang,…
											<h3>Mật ong rừng sạch nhất</h3>
											<strong>Mật ong bồ đề hoa</strong> là <strong>mật ong rừng sạch nhất</strong>, được khai thác từ
											nguồn hoa bồ đề rừng mọc trên các sườn núi cao, khí hậu quanh năm trong lành. Đặc biệt cây bồ đề
											rừng được trồng để khai thác gỗ và nhựa nên nguồn hoa được đảm bảo an toàn, không chưa dư lượng
											thuốc bảo vệ thực vật.&nbsp;
											<br />
											<br />
											<br />
											<img
												alt=''
												src='/images/ctsanpham/san%20pham/B%E1%BB%93%20%C4%91%E1%BB%81%20hoa/15.4.jpg'
												style={{ width: 800, height: 495 }}
											/>
											<br />
											<br />
											&nbsp;
											<h3>Mật ong tiện dụng nhất</h3>
											<strong>Mật ong bồ đề hoa</strong> được đóng theo quy cách &nbsp;gói 15g – một lượng vừa đủ cho 1
											lần sử dụng, dễ dàng sử dụng ở khắp mọi nơi. Mật ong bồ đề hoa được xem là{' '}
											<strong>mật ong nguyên chất</strong> tiện dụng nhất trên thị trường.&nbsp;
											<br />
											<br />
											<iframe
												allowFullScreen
												frameBorder={0}
												height={450}
												src='https://www.youtube.com/embed/2rZltw_CZ1M'
												width={800}
												title='description'
											/>
											<br />
											&nbsp;
											<h2>
												<span style={{ color: '#c0392b' }}>Thành phần của Mật ong Bồ đề hoa</span>
											</h2>
											<br />
											<img
												alt=''
												src='/uploaded/san%20pham/B%E1%BB%93%20%C4%91%E1%BB%81%20hoa/1.1.jpg'
												style={{ width: 800, height: 494 }}
											/>
											<br />
											&nbsp;
											<h2>
												<span style={{ color: '#c0392b' }}>Cách sử dụng mật ong</span>
												&nbsp;
											</h2>
											<ul>
												<li>
													Hòa 01 gói <strong>Mật ong Bồ đề hoa</strong> với 80ml nước ấm từ 35- 40 °C, khuấy đều và
													thưởng thức .
												</li>
												<li>Ăn trực tiếp hoặc pha với trà, cà phê, nước hoa quả, nước giải khát,v.v...</li>
												<li>Dùng cho các công dụng khác</li>
											</ul>
											<h2>
												<br />
												<span style={{ color: '#c0392b' }}>Công dụng của Mật ong Bồ đề hoa</span>
											</h2>
											<h3>1. Hỗ trợ điều trị dạ dày, đại tràng</h3>
											<p>
												Nhờ vào kết cấu đặc trưng, <strong>mật ong</strong> có khả năng bao phủ tốt hơn so với màng nhầy
												của thực quản, có thể giúp giảm axit, góp phần kiểm soát trào ngược dạ dày, chữa đau dạ dày.
												<br />
												Cách dùng:&nbsp;Pha 2-3 thìa cà phê <strong>Mật ong</strong> với 180ml nước ấm 35-40°
												<b>C</b>, uống vào sáng sớm và trước khi đi ngủ (có thể kết hợp với 1 thìa cà phê bột nghệ để
												tăng hiệu quả).
											</p>
											<h3>2. Chống cảm lạnh, cảm cúm</h3>
											<p>
												<strong>Mật ong</strong> có đặc tính kháng khuẩn, chống oxy hóa, là một trong những thành phần
												tốt nhất để điều trị cảm lạnh và các triệu chứng có liên quan.
												<br />
												Cách dùng:&nbsp;
												<br />
												Pha 2-3 thìa cà phê <strong>Mật ong</strong> với 180ml nước ấm 35-40°<b>C</b>, uống vào sáng sớm
												và trước khi đi ngủ (có thể kết hợp với 1/2 thìa cà phê bột quế để tăng hiệu quả).
											</p>
											<h3>3. Tăng cơ, giảm mệt mỏi cơ bắp</h3>
											<p>
												Một thìa <strong>mật ong</strong> có chứa 17,3 gam carbohydrate (tương đương 64 kcal) giúp tăng
												cường thể lực cho các vận động viên trong suốt quá trình tập luyện. Thực đơn dinh dưỡng của các
												vận động viên không thể thiếu <strong>mật ong</strong> để phục hồi cơ bắp.
												<br />
												Cách dùng:&nbsp;
												<br />
												Pha 2-3 thìa cà phê <strong>Mật ong</strong> với 180ml nước ấm 35-40°<b>C</b>, uống trước khi,
												sau khi tập (kết hợp với lòng đỏ trứng gà để tăng hiệu quả).
											</p>
											<h3>4. Giảm cholesteron, hỗ trợ điều trị bệnh tim mạch, huyết áp</h3>
											<p>
												<strong>Mật ong</strong> thúc đẩy quá trình sản sinh các cholesteron tốt trong cơ thể, giảm bớt
												các cholesteron xấu, giúp lưu thông máu.
												<br />
												Cách dùng:&nbsp;
												<br />
												Pha 2-3 thìa cà phê <strong>Mật ong</strong> với 180ml nước ấm 35-40°<b>C</b>, uống vào sáng sớm
												và trước khi đi ngủ (có thể kết hợp với 1/2 thìa cà phê bột quế để tăng hiệu quả).
											</p>
											<h3>5. An thần, ngủ ngon, tiêu hóa tốt</h3>
											<p>
												Trong y học cổ truyền, <strong>mật ong</strong> là vị thuốc được biết đến với các tên gọi như
												phong mật, bách hoa tinh. Nó có vị ngọt, tính bình, quy vào kinh Đại trường, Tỳ, Phế giúp bổ
												dưỡng tỳ vị, thanh nhiệt, giải độc, nhuận phế, chỉ khát, an thần, kích thích vị giác, nhờ chứa
												nhiều axit amin tryptophan, <strong>mật ong</strong> có thể giúp não bộ sản xuất serotonin làm
												cơ thể dễ dàng chìm vào giấc ngủ.&nbsp;
												<br />
												Cách dùng:&nbsp;
												<br />
												Pha 2-3 thìa cà phê <strong>Mật ong</strong> với 180ml nước ấm 35-40°<b>C</b>, uống vào sáng sớm
												và trước khi đi ngủ
											</p>
											<div className='c30' />
										</div>
										<div className='c20' />
										{/* AddThis Button BEGIN */}
										<div className='addthis_toolbox addthis_default_style '>
											<div className='addthis_button_facebook_like' />
											<div className='addthis_button_tweet' />
											<div className='addthis_button_google_plusone' />
											<div className='addthis_counter addthis_pill_style' />
										</div>
										{/* AddThis Button END */}
										<div className='c20' />
										<div className='box-comment-face'>
											<div id='fb-root' />
											<div
												className='fb-comments'
												data-href='https://vbchoney.com.vn/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'
												data-width='100%'
												data-numposts={5}
											/>
										</div>
										<div className='c20' />
										<div className='c30' />
									</div>
									<div className='col-lg-3 col-md-12 col-small'>
										<div className='box-menu-left'>
											<div className='title-menu-left'>
												{' '}
												<a href='/san-pham-mat-ong/'>Sản phẩm</a>
											</div>
											<ul className='menuleft'>
												<li className='true'>
													<a href='/hop-qua-tang/'>
														<span className='hvr-forward'>
															<i className='fa fa-angle-right' /> Hộp quà tặng{' '}
														</span>
													</a>
												</li>
												<li className='true'>
													<a href='/sua-ong-chua/'>
														<span className='hvr-forward'>
															<i className='fa fa-angle-right' /> Sữa ong chúa{' '}
														</span>
													</a>
												</li>
												<li className='active'>
													<a href='/mat-ong/'>
														<span className='hvr-forward'>
															<i className='fa fa-angle-right' /> Mật ong{' '}
														</span>
													</a>
													<ul className='menulv3'>
														<li className='active'>
															<a href='/mat-ong-bo-de-hoa/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong Bồ đề hoa nguyên chất
																</span>
															</a>
														</li>
														<li className='true'>
															<a href='/mat-ong-nguyen-chat/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong nguyên chất
																</span>
															</a>
														</li>
														<li className='true'>
															<a href='/mat-ong-nghe/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong Nghệ
																</span>
															</a>
														</li>
														<li className='true'>
															<a href='/mat-ong-hoa-qua/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong Hoa quả
																</span>
															</a>
														</li>
														<li className='true'>
															<a href='/mat-ong-sua-chua/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong Sữa chúa
																</span>
															</a>
														</li>
														<li className='true'>
															<a href='/mat-ong-ket-hop/'>
																<span className='hvr-forward'>
																	<i className='fa fa-dot-circle-o' aria-hidden='true' />
																	Mật ong kết hợp
																</span>
															</a>
														</li>
													</ul>
												</li>
												<li className='true'>
													<a href='/phan-hoa/'>
														<span className='hvr-forward'>
															<i className='fa fa-angle-right' /> Phấn hoa{' '}
														</span>
													</a>
												</li>
												<li className='true'>
													<a href='/ruou/'>
														<span className='hvr-forward'>
															<i className='fa fa-angle-right' /> Rượu{' '}
														</span>
													</a>
												</li>
											</ul>
										</div>
										<div className='box-col'>
											<div className='hd-box-col'>
												<a href='/san-pham-hot/'>
													<span>Sản phẩm hot</span>
												</a>
											</div>
											<div className='content-box-col content-box-col-pro'>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
																	width='100%'
																	alt='Mật ong Bồ đề hoa gói 10g'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'>
																	Mật ong Bồ đề hoa gói 10g
																</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOBDH-10G</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	10,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-bo-de-hoa/hop-mat-ong-nguyen-chat-20-goi.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g5_cr_320x320.jpg'
																	width='100%'
																	alt='Hộp mật ong nguyên chất 20 gói'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-bo-de-hoa/hop-mat-ong-nguyen-chat-20-goi.html'>
																	Hộp mật ong nguyên chất 20 gói
																</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOBDH-20G</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	285,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-bo-de-hoa/hop-mat-ong-nguyen-chat-12-goi.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g4_cr_320x320.jpg'
																	width='100%'
																	alt='Hộp Mật ong nguyên chất 12 gói'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-bo-de-hoa/hop-mat-ong-nguyen-chat-12-goi.html'>
																	Hộp Mật ong nguyên chất 12 gói
																</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOBDHG12</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	175,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-15g.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-Bồ đề hoa_15.3_cr_320x320.jpg'
																	width='100%'
																	alt='Mật ong Bồ đề hoa gói 15g'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-15g.html'>
																	Mật ong Bồ đề hoa gói 15g
																</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOBDHG15G</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	15,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-96-goi-x-10g.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-bo-de-hoa_243221-011_cr_320x320.jpg'
																	width='100%'
																	alt='Mật ong Bồ đề hoa 96 gói x 10g'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-96-goi-x-10g.html'>
																	Mật ong Bồ đề hoa 96 gói x 10g
																</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOBDH-96</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	960,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
												<div className='item-pro-col item-hvr' data-image-default data-imgs>
													<div className='inner-item-pro-col'>
														<div className='pos-re img-pro-col'>
															<a href='/mat-ong-nghe/tacumin-600g.html'>
																<img
																	src='/images/hinh/-uploaded-san pham-mat-ong_2603221-08_cr_320x320.jpg'
																	width='100%'
																	alt='Mật ong Tacumin 600g'
																/>
															</a>
														</div>
														<div className='content-item-pro-col ih'>
															<h3 className='pro-item-name-col'>
																<a href='/mat-ong-nghe/tacumin-600g.html'>Mật ong Tacumin 600g</a>
															</h3>
															{/*<div class="star-review">
                          <div class="star">
                              <div class="stared" style="width:80%;"></div>
                          </div>
                          <span class="review-count">6 reviews</span>
                </div>*/}
															<div className='code-item'>MSP: MOT600</div>
															<div className='price-item' style={{ marginTop: 0 }}>
																<strong>
																	678,000<span> đ</span>
																</strong>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='box-col'>
											<div className='hd-box-col'>
												<a href='/videos-1/'>
													<span>Videos</span>
												</a>
											</div>
											<div className='box-video-col'>
												<div className='video-col-f'>
													<div className='video-container' id='boxplaycol'>
														<img src='/images/hinh/-uploaded-video_video-home_cr_420x250.jpg' width='100%' alt='' />
														<a href='/' data-videoid='7Ds20Rw3qzE' className='btn-play-col' />
													</div>
												</div>
												<div className='list-video-col'>
													<div className='item-video-col'>
														<a
															data-name='Tacumin khắc tinh của viêm loét dạ dày, tá tràng'
															data-videoid='qYMTF-_N2qE'
															href='/'
														>
															Tacumin khắc tinh của viêm loét dạ dày, tá tràng
														</a>
													</div>
													<div className='item-video-col'>
														<a data-name='Honey Tam Đảo 100% NATURAL' data-videoid='Ti0chFUjclI' href='/'>
															Honey Tam Đảo 100% NATURAL
														</a>
													</div>
													<div className='item-video-col'>
														<a data-name='Quy trình sản xuất Tacumin Ong Tam Đảo' data-videoid='oouelTev1Aw' href='/'>
															Quy trình sản xuất Tacumin Ong Tam Đảo
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className='box-col'>
											<div className='hd-box-col'>
												<a href='/tin-tuc-noi-bat-1/'>
													<span>Tin tức nổi bật</span>
												</a>
											</div>
											<div className='content-box-col'>
												<div className='item-news-col'>
													<a href='/bai-viet/mua-mat-ong-rung-va-mat-ong-nguyen-chat-chinh-hieu.html'>
														<img
															src='/images/hinh/-uploaded-news-4221_cach-chua-nhiet-mieng-tai-nha_cr_420x270.png'
															width='100%'
															alt='Mua mật ong rừng và mật ong nguyên chất chính hiệu'
															className='image-news-left'
														/>
													</a>
													<h3 className='name-item-news-col'>
														<a href='/bai-viet/mua-mat-ong-rung-va-mat-ong-nguyen-chat-chinh-hieu.html'>
															Mua mật ong rừng và mật ong nguyên chất chính hiệu
														</a>
													</h3>
												</div>
												<div className='item-news-col'>
													<a href='/bai-viet/tim-hieu-ve-mat-ong-nguyen-chat.html'>
														<img
															src='/images/hinh/-uploaded-news-4221_704-04_cr_420x270.jpg'
															width='100%'
															alt='Tìm hiểu về mật ong nguyên chất'
															className='image-news-left'
														/>
													</a>
													<h3 className='name-item-news-col'>
														<a href='/bai-viet/tim-hieu-ve-mat-ong-nguyen-chat.html'>Tìm hiểu về mật ong nguyên chất</a>
													</h3>
												</div>
												<div className='item-news-col'>
													<a href='/tin-tuc-1/mat-ong-bo-de-hoa-tiep-tuc-trien-khai-ho-tro-von-5-ti-dong-cho-giao-vien-kinh-doanh.html'>
														<img
															src='/images/hinh/-uploaded-bai-viet-2903221_mat-ong-bo-de-hoa-tiep-tuc-trien-khai-ho-tro-von-5-ti-dong-cho-giao-vien-kinh-doanh-h--nh-thay_cr_420x270.jpg'
															width='100%'
															alt='Mật ong Bồ Đề Hoa tiếp tục triển khai hỗ trợ vốn 5 tỉ đồng cho giáo viên kinh doanh'
															className='image-news-left'
														/>
													</a>
													<h3 className='name-item-news-col'>
														<a href='/tin-tuc-1/mat-ong-bo-de-hoa-tiep-tuc-trien-khai-ho-tro-von-5-ti-dong-cho-giao-vien-kinh-doanh.html'>
															Mật ong Bồ Đề Hoa tiếp tục triển khai hỗ trợ vốn 5 tỉ đồng cho giáo viên kinh doanh
														</a>
													</h3>
												</div>
											</div>
											<a className='view-all-in-col' href='/tin-tuc-noi-bat-1/'>
												<span className='hvr-forward'>Xem tất cả</span>
											</a>
										</div>
										<h3 className='hd-box-col'>
											<a>Từ khóa tìm kiếm nhiều</a>
										</h3>
										<div className='line-col' />
										<div className='box-col box-tags'>
											<a style={{ fontSize: 14 }} href='/tags/chua-da-day.html'>
												Chữa dạ dày<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/chua-viem-hong.html'>
												Chữa viêm họng<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/lam-dep.html'>
												Làm đẹp<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/mat-ong.html'>
												Mật ong<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/mat-ong-nguyen-chat.html'>
												Mật ong nguyên chất<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/mat-ong-rung.html'>
												Mật ong rừng<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/nghe-mat-ong.html'>
												Nghệ mật ong<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/suc-khoe.html'>
												Sức khỏe<span>, </span>
											</a>
											<a style={{ fontSize: 14 }} href='/tags/tep-toi.html'>
												tác dụng của tỏi<span>, </span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='product-orther'>
							<div className='container'>
								<div className='title-page text-center'>
									<span>Sản phẩm khác</span>
								</div>
								<div className='c30' />
								<div className='row'>
									{dsProduct.san_pham.map((sp) => (
										<div className='col-lg-3 col-md-4 col-6' key={sp.id}>
											<div
												className='item-pro item-hvr'
												data-image-default='/temp/-uploaded-san pham-bo-de-hoa-mobdh-500g_243221-04_cr_320x320.jpg'
												data-imgs='/temp/-uploaded-san pham-bo-de-hoa-mobdh-500g_243221-01_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-mobdh-500g_243221-02_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-mobdh-500g_243221-03_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-mobdh-500g_243221-04_cr_320x320.jpg'
											>
												<div className='inner-item-pro'>
													<div className='img-hvr pos-re'>
														<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-500g.html'>
															<img src={`${sp.hinh}`} width='100%' alt='Mật ong Bồ đề hoa 500g' />
														</a>
														{/*<a class="fav-icon" href="#"></a>*/}
													</div>
													<div className='content-item-pro ih'>
														<h3 className='pro-item-name'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-500g.html'>Mật ong Bồ đề hoa 500g</a>
														</h3>
														<div className='price-item'>
															<strong>
																{sp.gia}
																<span> đ</span>
															</strong>
														</div>
														<div className='clearfix' />
														<a href='#!' onClick={addToCart.bind(this, sp.id, sp.gia)} className='btn-detail-pro'>
															<span>Mua hàng ngay</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Detail;
