import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestedAction } from '../../Redux/Action/productAction';
import { Link } from 'react-router-dom';
import { addcartRequestedAction, cartRequestedAction } from '../../Redux/Action/cartAction';
const Product_new = () => {
	const dispatch = useDispatch();
	const dsProduct = useSelector((state) => state.san_pham.ds_product);

	const addToCart = (id, gia) => {
		const gio_hang = {
			id_sp: id,
			so_luong: 1,
			gia: gia
		};
		dispatch(addcartRequestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};
	console.log(dsProduct);
	useEffect(() => {
		dispatch(productRequestedAction());
	}, [dispatch]);
	return (
		<>
			<div className='line-home'>
				<div className='container'>
					<h2 className='title-home-wc text-center'>
						<a href='/san-pham-hot/'>
							<strong>Chúng tôi mang đến</strong>
							<span>Sản phẩm mật ong rừng, mật ong nguyên chất</span>
						</a>
					</h2>
					<div className='c15' />
					<div className='row'>
						{dsProduct.san_pham.map((sp) => (
							<div className='col-lg-3 col-md-6 col-sm-6 col-6' key={sp.id}>
								<div
									className='item-pro'
									data-image-default='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
									data-imgs='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g10_cr_320x320.jpg,/images/product-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g6_cr_320x320.jpg,/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g7_cr_320x320.jpg,/images/product-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g8_cr_320x320.jpg,/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
								>
									<div className='inner-item-pro'>
										<div className='pos-re'>
											<a href='/mat-ong-bo-de-hoa/mat-ong-bo-de-hoa-goi-10g.html'>
												<img
													className='lazy'
													src={`${sp.hinh}`}
													data-src='/images/product/-uploaded-san pham-bo-de-hoa-Gói 15g_Mo12g9_cr_320x320.jpg'
													alt='Mật ong Bồ đề hoa gói 10g'
												/>
											</a>
											{/*<a class="fav-icon" href="#"></a>*/}
										</div>
										<div className='content-item-pro'>
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
				</div>
			</div>
		</>
	);
};
export default Product_new;
