import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personalRequestedAction } from '../../Redux/Action/profileAction.js';
const Profile = () => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.thong_tin.thong_tin);

	useEffect(() => {
		dispatch(personalRequestedAction());
	}, [dispatch]);
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse  main-nav' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a style={{ color: 'white' }} className='nav-link active' aria-current='page' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a style={{ color: 'white' }} className='nav-link' href='#!'>
									Sản phẩm
								</a>
							</li>
							<li className='nav-item'>
								<a style={{ color: 'white' }} className='nav-link' href='#!'>
									Liên hệ
								</a>
							</li>
							<li className='nav-item'>
								<a
									style={{ color: 'white' }}
									className='nav-link disabled'
									href='#!'
									tabIndex={-1}
									aria-disabled='true'
								>
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className='container'>
				<div className='team-single'>
					<div className='row'>
						<div className='col-lg-4 col-md-5 xs-margin-30px-bottom'>
							<div className='team-single-img'>
								<img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='' />
							</div>
							<div className='bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center'>
								<h4 className='margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600'>
									Chào:{profile.tt.ho_ten}
								</h4>
								<p className='sm-width-95 sm-margin-auto'>
									We are proud of child student. We teaching great activities and best program for your kids.
								</p>
								<div className='margin-20px-top team-single-icons'>
									<ul className='no-margin'>
										<li>
											<a href='/'>
												<i class='bi bi-facebook'></i>
											</a>
										</li>
										<li>
											<a href='/'>
												<i class='bi bi-twitter'></i>
											</a>
										</li>
										<li>
											<a href='/'>
												<i class='bi bi-google'></i>
											</a>
										</li>
										<li>
											<a href='/'>
												<i class='bi bi-instagram'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-lg-8 col-md-7'>
							<div className='team-single-text padding-50px-left sm-no-padding-left'>
								<h4 className='font-size38 sm-font-size32 xs-font-size30'>introduce yourself</h4>
								<p className='no-margin-bottom'>
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
									vitae dicta sunt explicabo. aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
									voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum voluptatem.
								</p>
								<div className='contact-info-section margin-40px-tb'>
									<ul className='list-style9 no-margin'>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-file-earmark-person text-orange'></i>
													<strong className='margin-10px-left text-orange'>Họ và tên:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>{profile.tt.ho_ten}</p>
												</div>
											</div>
										</li>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-phone text-yellow'></i>
													<strong className='margin-10px-left text-yellow'>Phone:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>{profile.tt.sdt}</p>
												</div>
											</div>
										</li>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-envelope  text-lightred'></i>
													<strong className='margin-10px-left text-lightred'>Email:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>{profile.tt.email}</p>
												</div>
											</div>
										</li>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-envelope  text-green'></i>

													<strong className='margin-10px-left text-green'>Địa chỉ:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>{profile.tt.dia_chi}</p>
												</div>
											</div>
										</li>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-lightning text-purple'></i>
													<strong className='margin-10px-left xs-margin-four-left text-purple'>Giới tính:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>Nam</p>
												</div>
											</div>
										</li>
										<li>
											<div className='row'>
												<div className='col-md-5 col-5'>
													<i class='bi bi-suit-heart text-pink'></i>
													<strong className='margin-10px-left xs-margin-four-left text-pink'>Ngày sinh:</strong>
												</div>
												<div className='col-md-7 col-7'>
													<p>
														<a href='#!' style={{ color: 'black' }}>
															23/07/1999
														</a>
													</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<h5 className='font-size24 sm-font-size22 xs-font-size20'>Professional Skills</h5>
								<div className='sm-no-margin'>
									<div className='progress-text'>
										<div className='row'>
											<div className='col-7'>Positive Behaviors</div>
											<div className='col-5 text-right'>40%</div>
										</div>
									</div>
									<div className='custom-progress progress'>
										<div
											role='progressbar'
											aria-valuenow={70}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '40%' }}
											className='animated custom-bar progress-bar slideInLeft bg-sky'
										/>
									</div>
									<div className='progress-text'>
										<div className='row'>
											<div className='col-7'>Teamworking Abilities</div>
											<div className='col-5 text-right'>50%</div>
										</div>
									</div>
									<div className='custom-progress progress'>
										<div
											role='progressbar'
											aria-valuenow={70}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '50%' }}
											className='animated custom-bar progress-bar slideInLeft bg-orange'
										/>
									</div>
									<div className='progress-text'>
										<div className='row'>
											<div className='col-7'>Time Management </div>
											<div className='col-5 text-right'>60%</div>
										</div>
									</div>
									<div className='custom-progress progress'>
										<div
											role='progressbar'
											aria-valuenow={70}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '60%' }}
											className='animated custom-bar progress-bar slideInLeft bg-green'
										/>
									</div>
									<div className='progress-text'>
										<div className='row'>
											<div className='col-7'>Excellent Communication</div>
											<div className='col-5 text-right'>80%</div>
										</div>
									</div>
									<div className='custom-progress progress'>
										<div
											role='progressbar'
											aria-valuenow={70}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '80%' }}
											className='animated custom-bar progress-bar slideInLeft bg-yellow'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-12'></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
