import React from 'react';
import Layout from '../Layout';
const HTPhanphoi = () => {
	return (
		<Layout>
			<div className='slide-child'>
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
					<div className='name-cat-root'>Hệ thống phân phối</div>
				</div>
			</div>
			<div className='crumb'>
				<div className='container'>
					<a href='/'>
						<i className='fa fa-home' aria-hidden='true' />
					</a>{' '}
					<i className='fa fa-angle-right' /> <a href='/he-thong-phan-phoi/'>Hệ thống phân phối</a>
				</div>
			</div>
			<div className='page-one'>
				<div className='mo-l'>
					<div className='mo-r'>
						<div className='container'>
							<div className='c20' />
							<h1 className='page-name text-center'>Hệ thống phân phối</h1>
							<div className='c0' />
							<div className='content-text' />
							<div className='filter-daily'>
								<form action method='get' id='filterform'>
									<div className='row'>
										<div className='col-lg-5 col-md-4'></div>
										<div className='col-lg-5 col-md-4'>
											<div className='form-group'>
												<select name='qh' className='form-control' id='quanhuyen'>
													<option value>-- Quân/Huyện --</option>
												</select>
											</div>
										</div>
										<div className='col-lg-2 col-md-4'>
											<div className='form-group'>
												<a
													href='/'
													style={{ paddingLeft: 0, paddingRight: 0, width: '100%', textAlign: 'center' }}
													onclick="$('#filterform').submit(); return false"
													className='btn-sub-frmfooter'
												>
													Tìm kiếm
												</a>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className='c30' />
							<div className='list-daily'>
								<table className='table table-bordered table-striped1'>
									<thead>
										<tr>
											<th scope='col' className='text-center hd-tbl'>
												STT
											</th>
											<th style={{ width: '30%' }} scope='col' className='text-center hd-tbl1'>
												Kênh phân phối
											</th>
											<th style={{ width: '50%' }} scope='col' className='text-center hd-tbl'>
												Tên shop
											</th>
											<th scope='col' className='text-center hd-tbl1'>
												Link shop
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope='row' className='text-center'>
												1
											</th>
											<td>Sàn Thương Mại Điện Tử TIKI</td>
											<td>MẬT ONG BỒ ĐỀ HOA </td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
										<tr>
											<th scope='row' className='text-center'>
												2
											</th>
											<td>Sàn Thương Mại Điện Tử LAZADA</td>
											<td>HONEY MART</td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
										<tr>
											<th scope='row' className='text-center'>
												3
											</th>
											<td>Sàn Thương Mại Điện Tử SHOPEE</td>
											<td>HONEY MART - Mật ong rừng</td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
										<tr>
											<th scope='row' className='text-center'>
												4
											</th>
											<td>FANPAGE - FACEBOOK</td>
											<td>NGUYỄN THỤY OANH - CHẮP CÁNH THƯƠNG HIỆU VIỆT </td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
										<tr>
											<th scope='row' className='text-center'>
												5
											</th>
											<td>FANPAGE - FACEBOOK</td>
											<td>HONEY MART</td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
										<tr>
											<th scope='row' className='text-center'>
												6
											</th>
											<td>ZALO SHOP</td>
											<td>HONEY MART</td>
											<td className='text-center'>
												<a href='/' className='btn-detail-pro' style={{ width: '100%' }} target='_blank' rel='nofollow'>
													View shop
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className='c30' />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default HTPhanphoi;
