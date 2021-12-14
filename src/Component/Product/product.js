import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { sp_categoryRequestedAction } from '../../Redux/Action/sp_categoryAction';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { categoryRequestedAction } from '../../Redux/Action/categoryAction';
import { addcartRequestedAction, cartRequestedAction } from '../../Redux/Action/cartAction';
const Product = () => {
	const dispatch = useDispatch();
	const sp_category = useSelector((state) => state.ds_category.sp_category.san_pham);
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
		dispatch(sp_categoryRequestedAction(id));
		dispatch(categoryRequestedAction());
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
						&nbsp;<a href='/mat-ong/'>Mật ong</a>
					</div>
				</div>
			</div>
			<div className='page-one'>
				<div className='mo-l'>
					<div className='mo-r'>
						<div className='container'>
							<div className='row'>
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
													<li className='true'>
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
																src='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
																width='100%'
																alt='Mật ong Bồ đề hoa gói 10g'
															/>
														</a>
													</div>
													<div className='content-item-pro-col ih'>
														<h3 className='pro-item-name-col'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'>Mật ong Bồ đề hoa gói 10g</a>
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
																src='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g5_cr_320x320.jpg'
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
																src='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g4_cr_320x320.jpg'
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
																src='/images/product/-uploaded-san pham-Bồ đề hoa_15.3_cr_320x320.jpg'
																width='100%'
																alt='Mật ong Bồ đề hoa gói 15g'
															/>
														</a>
													</div>
													<div className='content-item-pro-col ih'>
														<h3 className='pro-item-name-col'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-15g.html'>Mật ong Bồ đề hoa gói 15g</a>
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
																src='/images/product/-uploaded-san pham-bo-de-hoa_243221-011_cr_320x320.jpg'
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
																src='/images/product/-uploaded-san pham-mat-ong_2603221-08_cr_320x320.jpg'
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
									<h3 className='hd-box-col'>
										<a href='true'>Từ khóa tìm kiếm nhiều</a>
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
								<div className='col-lg-9 col-md-12 col-sm-12'>
									<h1 className='page-name'>Sản Phẩm</h1>
									<div className='c30' />
									<div className='row'>
										{sp_category.map((sp) => (
											<div className='col-lg-4 col-md-4 col-6' key={sp.id}>
												<div
													className='item-pro item-hvr'
													data-image-default='/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
													data-imgs='/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g10_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g6_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g7_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g8_cr_320x320.jpg,/temp/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
												>
													<div className='inner-item-pro'>
														<div className='img-hvr pos-re'>
															<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'>
																<img 	 width='100%' alt='Mật ong Bồ đề hoa gói 10g' />
															</a>
															{/*<a class="fav-icon" href="#"></a>*/}
														</div>
														<div className='content-item-pro ih'>
															<h3 className='pro-item-name'>
																<Link to={`/Detail/${sp.id}`}>{sp.tensp}</Link>
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
									<div className='paging'>
										<div className='paging'>
											<ul className='pagination justify-content-center'>
												<li className='page-item disabled'>
													<a href='/mat-ong/page-1/' className='page-link'>
														<span>
															<strong>
																{' '}
																<i className='fa fa-angle-double-left' />
															</strong>
														</span>
													</a>
												</li>
												<li className='page-item disabled'>
													<a href='/mat-ong/page-1/' className='page-link'>
														<span>
															<strong>
																{' '}
																<i className='fa fa-angle-left' />{' '}
															</strong>
														</span>
													</a>
												</li>
												<li className='page-item'>
													<a href='true' className='page-link active'>
														&nbsp;<span>1</span>&nbsp;
													</a>
												</li>
												<li className='page-item'>
													<a href='/mat-ong/page-2/' className='page-link'>
														&nbsp;<span>2</span>&nbsp;
													</a>
												</li>
												<li className='page-item'>
													<a href='/mat-ong/page-3/' className='page-link'>
														&nbsp;<span>3</span>&nbsp;
													</a>
												</li>
												<li className='page-item'>
													<a href='/mat-ong/page-4/' className='page-link'>
														&nbsp;<span>4</span>&nbsp;
													</a>
												</li>
												<li className='page-item '>
													<a href='/mat-ong/page-4/' className='page-link'>
														<span>
															<strong>
																{' '}
																<i className='fa fa-angle-right' />{' '}
															</strong>
														</span>
													</a>
												</li>{' '}
												<li className='page-item '>
													<a href='/mat-ong/page-4/' className='page-link'>
														<span>
															<strong>
																{' '}
																<i className='fa fa-angle-double-right' />{' '}
															</strong>
														</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className='c30' />
									<div className='intro-cat' />
									<div className='c30' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Product;
